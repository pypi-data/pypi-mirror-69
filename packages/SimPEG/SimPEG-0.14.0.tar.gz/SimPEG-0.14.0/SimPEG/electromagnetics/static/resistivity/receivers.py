import numpy as np
from ....utils.code_utils import deprecate_class

import properties
from ....utils import closestPoints, sdiag
from ....survey import BaseRx as BaseSimPEGRx, RxLocationArray


# Trapezoidal integration for 2D DC problem
def IntTrapezoidal(kys, Pf, y=0.0):
    dky = np.diff(kys) / 2
    weights = np.r_[dky, 0] + np.r_[0, dky]
    weights *= np.cos(kys * y)  # *(1.0/np.pi)
    # assume constant value at 0 frequency?
    weights[0] += kys[0] / 2 * (1.0 + np.cos(kys[0] * y))
    weights /= np.pi

    return Pf.dot(weights)


# Receiver classes
class BaseRx(BaseSimPEGRx):
    """
    Base DC receiver
    """

    orientation = properties.StringChoice(
        "orientation of the receiver. Must currently be 'x', 'y', 'z'", ["x", "y", "z"]
    )

    projField = properties.StringChoice(
        "field to be projected in the calculation of the data",
        choices=["phi", "e", "j"],
        default="phi",
    )

    _geometric_factor = None

    def __init__(self, locations=None, **kwargs):
        super(BaseRx, self).__init__(**kwargs)
        if locations is not None:
            self.locations = locations

    # @property
    # def projField(self):
    #     """Field Type projection (e.g. e b ...)"""
    #     return self.knownRxTypes[self.rxType][0]

    data_type = properties.StringChoice(
        "Type of DC-IP survey",
        required=True,
        default="volt",
        choices=["volt", "apparent_resistivity", "apparent_chargeability"],
    )

    # data_type = 'volt'

    # knownRxTypes = {
    #     'phi': ['phi', None],
    #     'ex': ['e', 'x'],
    #     'ey': ['e', 'y'],
    #     'ez': ['e', 'z'],
    #     'jx': ['j', 'x'],
    #     'jy': ['j', 'y'],
    #     'jz': ['j', 'z'],
    # }

    @property
    def geometric_factor(self):
        return self._geometric_factor

    @property
    def dc_voltage(self):
        return self._dc_voltage

    def projGLoc(self, f):
        """Grid Location projection (e.g. Ex Fy ...)"""
        # field = self.knownRxTypes[self.rxType][0]
        # orientation = self.knownRxTypes[self.rxType][1]
        if self.orientation is not None:
            return f._GLoc(self.projField) + self.orientation
        return f._GLoc(self.projField)

    def eval(self, src, mesh, f):
        P = self.getP(mesh, self.projGLoc(f))
        return P * f[src, self.projField]

    def evalDeriv(self, src, mesh, f, v, adjoint=False):
        P = self.getP(mesh, self.projGLoc(f))
        if not adjoint:
            return P * v
        elif adjoint:
            return P.T * v


# DC.Rx.Dipole(locations)
class Dipole(BaseRx):
    """
    Dipole receiver
    """

    # Threshold to be assumed as a pole receiver
    threshold = 1e-5

    locations = properties.List(
        "list of locations of each electrode in a dipole receiver",
        RxLocationArray("location of electrode", shape=("*", "*")),
        min_length=1,
        max_length=2,
    )

    def __init__(self, locationsM, locationsN, **kwargs):
        if locationsM.shape != locationsN.shape:
            raise ValueError("locationsM and locationsN need to be the same size")
        locations = [np.atleast_2d(locationsM), np.atleast_2d(locationsN)]
        super(Dipole, self).__init__(**kwargs)
        self.locations = locations

    @property
    def nD(self):
        """Number of data in the receiver."""
        return self.locations[0].shape[0]

    def getP(self, mesh, Gloc, transpose=False):
        if mesh in self._Ps:
            return self._Ps[mesh]

        P0 = mesh.getInterpolationMat(self.locations[0], Gloc)
        P1 = mesh.getInterpolationMat(self.locations[1], Gloc)
        P = P0 - P1

        if self.data_type == "apparent_resistivity":
            P = sdiag(1.0 / self.geometric_factor) * P
        elif self.data_type == "apparent_chargeability":
            P = sdiag(1.0 / self.dc_voltage) * P

        if self.storeProjections:
            self._Ps[mesh] = P

        if transpose:
            P = P.toarray().T

        return P


class Pole(BaseRx):
    """
    Pole receiver
    """

    # def __init__(self, locationsM, **kwargs):

    #     locations = np.atleast_2d(locationsM)
    #     # We may not need this ...
    #     BaseRx.__init__(self, locations)

    @property
    def nD(self):
        """Number of data in the receiver."""
        return self.locations.shape[0]

    def getP(self, mesh, Gloc):
        if mesh in self._Ps:
            return self._Ps[mesh]

        P = mesh.getInterpolationMat(self.locations, Gloc)

        if self.data_type == "apparent_resistivity":
            P = sdiag(1.0 / self.geometric_factor) * P
        elif self.data_type == "apparent_chargeability":
            P = sdiag(1.0 / self.dc_voltage) * P
        if self.storeProjections:
            self._Ps[mesh] = P

        return P


############
# Deprecated
############


@deprecate_class(removal_version="0.15.0")
class Dipole_ky(Dipole):
    pass


@deprecate_class(removal_version="0.15.0")
class Pole_ky(Pole):
    pass
