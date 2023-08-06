import astropy.coordinates as coord
import astropy.constants as const
import sunpy.coordinates.frames as frames
import astropy.units as u

import numpy as np
import scipy.interpolate

from pfsspy import coords

import functools


class FieldLines:
    """
    A collection of :class:`FieldLine`.

    Parameters
    ----------
    field_lines : list of `FieldLine`.
    """
    def __init__(self, field_lines):
        self.field_lines = np.array(field_lines)

    def __getitem__(self, idx):
        return self.field_lines[idx]

    def __len__(self):
        return len(self.field_lines)

    @property
    @functools.lru_cache()
    def polarities(self):
        """
        Magnetic field line polarities. ``0`` for closed, otherwise sign(Br) on
        the solar surface.
        """
        polarities = [fline.polarity for fline in self.field_lines]
        return np.array(polarities, dtype=int)

    @property
    def connectivities(self):
        """
        Field line connectivities. ``1`` for open, ``0`` for closed.
        """
        return np.abs(self.polarities)

    @property
    def expansion_factors(self):
        """
        Expansion factors. Set to NaN for closed field lines.
        """
        return np.array([fline.expansion_factor for fline in self.field_lines])

    @property
    def open_field_lines(self):
        """
        An `OpenFieldLines` object containing open field lines.
        """
        open_idxs = np.where(self.connectivities == 1)[0]
        return OpenFieldLines(np.array(self.field_lines)[open_idxs])

    @property
    def closed_field_lines(self):
        """
        An `ClosedFieldLines` object containing open field lines.
        """
        closed_idxs = np.where(self.connectivities == 0)[0]
        return ClosedFieldLines(self.field_lines[closed_idxs])


class OpenFieldLines(FieldLines):
    """
    A set of open field lines.
    """
    def __init__(self, field_lines):
        super().__init__(field_lines)
        if not np.all(self.connectivities):
            raise ValueError('Not all field lines are open')

    @property
    @functools.lru_cache()
    def source_surface_feet(self):
        """
        Coordinates of the source suface footpoints.
        """
        source_surface_feet = [fline.source_surface_footpoint for
                               fline in self.field_lines]

        if len(source_surface_feet) == 1:
            source_surface_feet = source_surface_feet[0]
        else:
            source_surface_feet = coord.concatenate(source_surface_feet)

        return source_surface_feet

    @property
    @functools.lru_cache()
    def solar_feet(self):
        """
        Coordinates of the solar footpoints.
        """
        solar_feet = [fline.solar_footpoint for fline in self.field_lines]

        if len(solar_feet) == 1:
            solar_feet = solar_feet[0]
        else:
            solar_feet = coord.concatenate(solar_feet)

        return solar_feet


class ClosedFieldLines(FieldLines):
    """
    A set of closed field lines.
    """
    def __init__(self, field_lines):
        super().__init__(field_lines)
        if np.any(self.connectivities):
            raise ValueError('Not all field lines are closed')


class FieldLine:
    """
    A single magnetic field line.

    Parameters
    ----------
    x, y, z :
        Field line coordinates in cartesian coordinates.
    output : Output
        The PFSS output through which this field line was traced.
    """
    def __init__(self, x, y, z, output):
        self._x = np.array(x)
        self._y = np.array(y)
        self._z = np.array(z)
        self._r = np.sqrt(self._x**2 + self._y**2 + self._z**2)
        self._output = output
        # Set _is_open
        atol = 0.1
        self._is_open = np.abs(self._r[0] - self._r[-1]) > atol
        # Set _polarity
        self._polarity = -np.sign(self._r[0] - self._r[-1]) * self._is_open

    @property
    def coords(self):
        """
        Field line `~astropy.coordinates.SkyCoord`.
        """
        r, lat, lon = coord.cartesian_to_spherical(
            self._x, self._y, self._z)
        r *= const.R_sun
        lon += self._output._lon0 + 180 * u.deg
        coords = coord.SkyCoord(
            lon, lat, r, frame=self._output.coordinate_frame)
        return coords

    @property
    def is_open(self):
        """
        Returns ``True`` if one of the field line is connected to the solar
        surface and one to the outer boundary, ``False`` otherwise.
        """
        return self._is_open

    @property
    def polarity(self):
        """
        Magnetic field line polarity.

        Returns
        -------
        pol : int
            0 if the field line is closed, otherwise sign(Br) of the magnetic
            field on the solar surface.
        """
        return self._polarity

    @property
    def solar_footpoint(self):
        """
        Solar surface magnetic field footpoint.

        This is the ends of the magnetic field line that lies on the solar
        surface.

        Returns
        -------
        footpoint : :class:`~astropy.coordinates.SkyCoord`

        Notes
        -----
        For a closed field line, both ends lie on the solar surface. This
        method returns the field line pointing out from the solar surface in
        this case.
        """
        if self.polarity == 1 or not self.is_open:
            return self.coords[0]
        else:
            return self.coords[-1]

    @property
    def source_surface_footpoint(self):
        """
        Solar surface magnetic field footpoint.

        This is the ends of the magnetic field line that lies on the solar
        surface.

        Returns
        -------
        footpoint : :class:`~astropy.coordinates.SkyCoord`

        Notes
        -----
        For a closed field line, both ends lie on the solar surface. This
        method returns the field line pointing out from the solar surface in
        this case.
        """
        if self.polarity == 1 or not self.is_open:
            return self.coords[-1]
        else:
            return self.coords[0]

    @property
    @functools.lru_cache()
    def expansion_factor(self):
        r"""
        Magnetic field expansion factor.

        The expansion factor is defnied as
        :math:`(r_{\odot}^{2} B_{\odot}) / (r_{ss}^{2} B_{ss}))`

        Returns
        -------
        exp_fact : float
            Field line expansion factor.
        """
        import scipy.interpolate

        if not self.is_open:
            return np.nan

        if self._r[0] > self._r[-1]:
            solar_foot = -1
            source_foot = 0
        else:
            solar_foot = 0
            source_foot = -1

        def interp(map, idx):
            x, y, z = self._x[idx], self._y[idx], self._z[idx]
            rho, s, phi = coords.cart2strum(x, y, z)
            interpolator = scipy.interpolate.RegularGridInterpolator(
                (self._output.grid.pg, self._output.grid.sg), map, method='linear')
            return interpolator((phi, s))

        # Get output magnetic field, and calculate |B|
        modb = self._output._modbg
        # Interpolate at each end of field line
        b_solar = interp(modb[:, :, 0], solar_foot)
        b_source = interp(modb[:, :, -1], source_foot)
        expansion_factor = ((1**2 * b_solar) /
                            (self._output.grid.rss**2 * b_source))
        return expansion_factor
