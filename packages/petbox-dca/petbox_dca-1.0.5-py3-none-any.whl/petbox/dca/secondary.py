"""
Decline Curve Models
Copyright © 2020 David S. Fulford

Author
------
David S. Fulford
Derrick W. Turk

Notes
-----
Created on August 5, 2019
"""

import warnings

import dataclasses as dc
from dataclasses import dataclass

from numpy import ndarray
import numpy as np

from scipy.integrate import fixed_quad  # type: ignore

from typing import (TypeVar, Type, List, Dict, Tuple, Any,
                    Sequence, Optional, Callable, ClassVar, Union)
from typing import cast

from .base import (ParamDesc, DeclineCurve, PrimaryPhase, SecondaryPhase,
                   DAYS_PER_MONTH, DAYS_PER_YEAR)


@dataclass
class NullSecondaryPhase(SecondaryPhase):
    """
    A null `SecondaryPhase` class that always returns zeroes.

    Parameters
    ----------
      None
    """

    def _set_defaults(self) -> None:
        # Do not associate with the null secondary phase
        pass

    def _yieldfn(self, t: ndarray) -> ndarray:
        return np.zeros_like(t, dtype=float)

    def _qfn(self, t: ndarray) -> ndarray:
        return np.zeros_like(t, dtype=float)

    def _Nfn(self, t: ndarray, **kwargs: Dict[Any, Any]) -> ndarray:
        return np.zeros_like(t, dtype=float)

    def _Dfn(self, t: ndarray) -> ndarray:
        return np.zeros_like(t, dtype=float)

    def _Dfn2(self, t: ndarray) -> ndarray:
        return np.zeros_like(t, dtype=float)

    def _betafn(self, t: ndarray) -> ndarray:
        return np.zeros_like(t, dtype=float)

    def _bfn(self, t: ndarray) -> ndarray:
        return np.zeros_like(t, dtype=float)

    @classmethod
    def get_param_descs(cls) -> List[ParamDesc]:
        return []


@dataclass(frozen=True)
class PLYield(SecondaryPhase):
    """
    Power-Law Secondary Phase Model.

    Fulford, D.S. 2018. A Model-Based Diagnostic Workflow for Time-Rate
    Performance of Unconventional Wells. Presented at Unconventional Resources
    Conference in Houston, Texas, USA, 23–25 July. URTeC-2903036.
    https://doi.org/10.15530/urtec-2018-2903036.

    Has the general form of

    .. math::

        GOR = c \, t^m

    and allows independent early-time and late-time slopes ``m0`` and ``m`` respectively.

    Parameters
    ----------
      c: float
        The value of GOR that acts as the anchor or pivot at ``t=t0``.

      m0: float
        Early-time power-law slope.

      m: float
        Late-time power-law slope.

      t0: float
        The time of the anchor or pivot value ``c``.

      min: Optional[float] = None
        The minimum allowed value. Would be used e.g. to limit minimum CGR.

      max: Optional[float] = None
        The maximum allowed value. Would be used e.g. to limit maximum GOR.
    """
    c: float
    m0: float
    m: float
    t0: float
    min: Optional[float] = None
    max: Optional[float] = None

    def _validate(self) -> None:
        pass

    def _yieldfn(self, t: ndarray) -> ndarray:
        c = self.c
        t0 = self.t0
        m = np.where(t < t0, self.m0, self.m)

        with warnings.catch_warnings(record=True) as w:
            if self.min is not None or self.max is not None:
                return np.where(t == 0.0, 0.0, np.clip(c * (t / t0) ** m, self.min, self.max))
            return np.where(t == 0.0, 0.0, c * (t / t0) ** m)

    def _qfn(self, t: ndarray) -> ndarray:
        return self._yieldfn(t) / 1000.0 * self.primary._qfn(t)

    def _Nfn(self, t: ndarray, **kwargs: Dict[Any, Any]) -> ndarray:
        with warnings.catch_warnings(record=True) as w:
            return self._integrate_with(self._qfn, t, **kwargs)

    def _Dfn(self, t: ndarray) -> ndarray:
        c = self.c
        t0 = self.t0
        m = np.where(t < t0, self.m0, self.m)
        y = self._yieldfn(t)

        if self.min is not None:
            m[y <= self.min] = 0.0
        if self.max is not None:
            m[y >= self.max] = 0.0
        return -m / t + self.primary._Dfn(t)

    def _Dfn2(self, t: ndarray) -> ndarray:
        c = self.c
        t0 = self.t0
        m = np.where(t < t0, self.m0, self.m)
        y = self._yieldfn(t)

        if self.min is not None:
            m[y <= self.min] = 0.0
        if self.max is not None:
            m[y >= self.max] = 0.0
        return -m / (t * t)

    def _betafn(self, t: ndarray) -> ndarray:
        return self._Dfn(t) * t

    def _bfn(self, t: ndarray) -> ndarray:
        D = self._Dfn(t)
        with warnings.catch_warnings(record=True) as w:
            return np.where(D == 0.0, 0.0, (self._Dfn2(t) - self.primary._Dfn2(t)) / (D * D))

    @classmethod
    def get_param_descs(cls) -> List[ParamDesc]:
        return [
            ParamDesc(
                'c', 'Pivot point of early- and late-time functions [vol/vol]',
                0.0, None,
                lambda r, n: r.uniform(0.0, 1e6, n),
                exclude_lower_bound=True),
            ParamDesc(
                'm0', 'Early-time slope before pivot point',
                -10.0, 10.0,
                lambda r, n: r.uniform(-10.0, 10.0, n)),
            ParamDesc(
                'm', 'Late-time slope after pivot point',
                -1.0, 1.0,
                lambda r, n: r.uniform(-1.0, 1.0, n)),
            ParamDesc(
                't0', 'Time of pivot point [days]',
                0, None,
                lambda r, n: r.uniform(0.0, 1e5, n),
                exclude_lower_bound=True)
        ]
