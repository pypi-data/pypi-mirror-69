import numpy as np
import properties
from ....utils.code_utils import deprecate_class

from ....fields import TimeFields
from ....utils import Identity, Zero

# TODO: this should be the BaseDCSimulation2D --> but circular imports at the
# moment, so we can settle for its base at the moment
from ...base import BaseEMSimulation


class Fields2D(TimeFields):

    """

    Fancy Field Storage for a 2.5D code.

    u[:,'phi', kyInd] = phi
    print(u[src0,'phi'])

    Only one field type is stored for
    each problem, the rest are computed. The fields obejct acts like an array
    and is indexed by

    .. code-block:: python

        f = problem.fields(m)
        e = f[srcList,'e']
        j = f[srcList,'j']

    If accessing all sources for a given field, use the

    .. code-block:: python

        f = problem.fields(m)
        phi = f[:,'phi']
        e = f[:,'e']
        b = f[:,'b']

    The array returned will be size (nE or nF, nSrcs :math:`\\times`
    nFrequencies)

    """

    simulation = properties.Instance("2D DC simulation", BaseEMSimulation)

    knownFields = {}
    dtype = float

    @property
    def survey(self):
        mini = self.simulation._mini_survey
        if mini is not None:
            return mini
        return self.simulation.survey

    def _phiDeriv(self, kyInd, src, du_dm_v, v, adjoint=False):
        if (
            getattr(self, "_phiDeriv_u", None) is None
            or getattr(self, "_phiDeriv_m", None) is None
        ):
            raise NotImplementedError(
                "Getting phiDerivs from {0!s} is not "
                "implemented".format(self.knownFields.keys()[0])
            )

        if adjoint:
            return (
                self._phiDeriv_u(kyInd, src, v, adjoint=adjoint),
                self._phiDeriv_m(kyInd, src, v, adjoint=adjoint),
            )

        return np.array(
            self._phiDeriv_u(kyInd, src, du_dm_v, adjoint)
            + self._phiDeriv_m(kyInd, src, v, adjoint),
            dtype=float,
        )

    def _eDeriv(self, kyInd, src, du_dm_v, v, adjoint=False):
        if (
            getattr(self, "_eDeriv_u", None) is None
            or getattr(self, "_eDeriv_m", None) is None
        ):
            raise NotImplementedError(
                "Getting eDerivs from {0!s} is not "
                "implemented".format(self.knownFields.keys()[0])
            )

        if adjoint:
            return (
                self._eDeriv_u(kyInd, src, v, adjoint),
                self._eDeriv_m(kyInd, src, v, adjoint),
            )
        return np.array(
            self._eDeriv_u(kyInd, src, du_dm_v, adjoint)
            + self._eDeriv_m(kyInd, src, v, adjoint),
            dtype=float,
        )

    def _jDeriv(self, kyInd, src, du_dm_v, v, adjoint=False):
        if (
            getattr(self, "_jDeriv_u", None) is None
            or getattr(self, "_jDeriv_m", None) is None
        ):
            raise NotImplementedError(
                "Getting jDerivs from {0!s} is not "
                "implemented".format(self.knownFields.keys()[0])
            )

        if adjoint:
            return (
                self._jDeriv_u(kyInd, src, v, adjoint),
                self._jDeriv_m(kyInd, src, v, adjoint),
            )
        return np.array(
            self._jDeriv_u(kyInd, src, du_dm_v, adjoint)
            + self._jDeriv_m(kyInd, src, v, adjoint),
            dtype=float,
        )

    # def _eDeriv(self, tInd, src, dun_dm_v, v, adjoint=False):
    #     if adjoint is True:
    #         return self._eDeriv_u(tInd, src, v, adjoint), self._eDeriv_m(tInd, src, v, adjoint)
    #     return self._eDeriv_u(tInd, src, dun_dm_v) + self._eDeriv_m(tInd, src, v)

    # def _bDeriv(self, tInd, src, dun_dm_v, v, adjoint=False):
    #     if adjoint is True:
    #         return self._bDeriv_u(tInd, src, v, adjoint), self._bDeriv_m(tInd, src, v, adjoint)
    #     return self._bDeriv_u(tInd, src, dun_dm_v) + self._bDeriv_m(tInd, src, v)


class Fields2DCellCentered(Fields2D):
    """
    Fancy Field Storage for a 2.5D cell centered code.
    """

    knownFields = {"phiSolution": "CC"}
    aliasFields = {
        "phi": ["phiSolution", "CC", "_phi"],
        "j": ["phiSolution", "F", "_j"],
        "e": ["phiSolution", "F", "_e"],
    }
    # primary - secondary
    # CC variables

    def _GLoc(self, fieldType):
        if fieldType == "phi":
            return "CC"
        elif fieldType == "e" or fieldType == "j":
            return "F"
        else:
            raise Exception("Field type must be phi, e, j")

    def _phi(self, phiSolution, src, kyInd):
        return phiSolution

    def _phiDeriv_u(self, kyInd, src, v, adjoint=False):
        return Identity() * v

    def _phiDeriv_m(self, kyInd, src, v, adjoint=False):
        return Zero()

    def _j(self, phiSolution, srcList):
        raise NotImplementedError

    def _e(self, phiSolution, srcList):
        raise NotImplementedError


class Fields2DNodal(Fields2D):
    """
    Fancy Field Storage for a 2.5D nodal code.
    """

    knownFields = {"phiSolution": "N"}
    aliasFields = {
        "phi": ["phiSolution", "N", "_phi"],
        "j": ["phiSolution", "E", "_j"],
        "e": ["phiSolution", "E", "_e"],
    }
    # primary - secondary
    # CC variables

    def _GLoc(self, fieldType):
        if fieldType == "phi":
            return "N"
        elif fieldType == "e" or fieldType == "j":
            return "E"
        else:
            raise Exception("Field type must be phi, e, j")

    def _phi(self, phiSolution, src, kyInd):
        return phiSolution

    def _phiDeriv_u(self, kyInd, src, v, adjoint=False):
        return Identity() * v

    def _phiDeriv_m(self, kyInd, src, v, adjoint=False):
        return Zero()

    def _j(self, phiSolution, srcList):
        raise NotImplementedError

    def _e(self, phiSolution, srcList):
        raise NotImplementedError


Fields2DCellCentred = Fields2DCellCentered


############
# Deprecated
############
@deprecate_class(removal_version="0.15.0")
class Fields_ky(Fields2D):
    pass


@deprecate_class(removal_version="0.15.0")
class Fields_ky_CC(Fields2DCellCentered):
    pass


@deprecate_class(removal_version="0.15.0")
class Fields_ky_N(Fields2DNodal):
    pass
