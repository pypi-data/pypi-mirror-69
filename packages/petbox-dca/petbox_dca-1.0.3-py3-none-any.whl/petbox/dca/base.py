"""
Decline Curve Models
Enhancement of module developed for David S. Fulford's thesis research
Copyright © 2020, Gryphon Oil & Gas

Author
------
David S. Fulford
Derrick W. Turk

Notes
-----
Created on August 5, 2019
"""

from math import exp, log, log1p, ceil as ceiling, floor
from itertools import starmap
import warnings

import dataclasses as dc
from dataclasses import dataclass

from numpy import ndarray
import numpy as np
from numpy.random import RandomState

from scipy.special import expi as ei, gammainc  # type: ignore
from scipy.integrate import fixed_quad  # type: ignore

from abc import ABC, abstractmethod
from typing import (TypeVar, Type, List, Dict, Tuple, Any,
                    Sequence, Iterator, Optional, Callable, ClassVar, Union)
from typing import cast


DAYS_PER_MONTH = 365.25 / 12.0
DAYS_PER_YEAR = 365.25


@dataclass(frozen=True)
class ParamDesc():
    name: str
    description: str
    lower_bound: Optional[float]
    upper_bound: Optional[float]
    naive_gen: Callable[[RandomState, int], ndarray]
    exclude_lower_bound: bool = False
    exclude_upper_bound: bool = False


def get_time(start: float = 1.0, end: float = 1e5, n: int = 101) -> ndarray:
    """
    Get a time array to evaluate with.

    Parameters
    ----------
      start: float
        The first time value of the array.

      end: float
        The last time value of the array.

      n: int
        The number of element in the array.

    Returns
    -------
      time: numpy.ndarray[float]
        An evenly-logspaced time series.
    """
    return 10.0 ** np.linspace(log(start), log(end), n)


def get_time_monthly_vol(start: float = 1, end: int = 10_000) -> ndarray:
    """
    Get a time array to evaluate with.

    Parameters
    ----------
      start: float
        The first time value of the array.

      end: float
        The last time value of the array.

    Returns
    -------
      time: numpy.ndarray[float]
        An evenly-monthly-spaced time series
    """
    return (np.arange(start, end // DAYS_PER_MONTH) + 1) * DAYS_PER_MONTH


class DeclineCurve(ABC):
    """
    Base class for decline curve models. Each model must implement the defined
    abstract methods.
    """

    def rate(self, t: Union[float, ndarray]) -> ndarray:
        """
        Defines the model rate function.

        Parameters
        ----------
          t: Union[float, numpy.ndarray[float]]
            An array of times at which to evaluate the function.

        Returns
        -------
          rate: numpy.ndarray[float]
        """
        t = self._validate_ndarray(t)
        return self._qfn(t)

    def cum(self, t: Union[float, ndarray], **kwargs: Any) -> ndarray:
        """
        Defines the model cumulative volume function.
        For secondary phase, precision is limited by the step size of the time array.

        Parameters
        ----------
          t: Union[float, numpy.ndarray[float]]
            An array of times at which to evaluate the function.

          **kwargs
            Additional arguments passed to :func:`scipy.integrate.quadrature` if needed.

        Returns
        -------
          cumulative volume: numpy.ndarray[float]
        """
        t = self._validate_ndarray(t)
        return self._Nfn(t, **kwargs)

    def interval_vol(self, t: Union[float, ndarray], t0: Optional[Union[float, ndarray]] = None,
                     **kwargs: Any) -> ndarray:
        """
        Defines the model interval volume function.
        For secondary phase, precision is limited by the step size of the time array.

        Parameters
        ----------
          t: Union[float, numpy.ndarray[float]]
            An array of interval end times at which to evaluate the function.

          t0: Optional[Union[float, numpy.ndarray[float]]]
            A start time of the first interval. If not given, the first element
            of ``t`` is used.

          **kwargs
            Additional arguments passed to :func:`scipy.integrate.quadrature` if needed.

        Returns
        -------
          interval volume: numpy.ndarray[float]
        """
        t = self._validate_ndarray(t)
        if t0 is None:
            t0 = t[0]
        t0 = cast(ndarray, np.atleast_1d(t0).astype(float))
        return np.diff(self._Nfn(t, **kwargs), prepend=self._Nfn(t0))

    def monthly_vol(self, t: Union[float, ndarray], t0: Optional[Union[float, ndarray]] = None,
                    **kwargs: Any) -> ndarray:
        """
        Defines the model interval volume function transformed to equivalent monthly volumes.
        For secondary phase, precision is limited by the step size of the time array.

        Parameters
        ----------
          t: Union[float, numpy.ndarray[float]]
            An array of interval end times at which to evaluate the function.

          t0: Optional[Union[float, numpy.ndarray[float]]]
            A start time of the first interval. If not given, assumed to be zero.

          **kwargs
            Additional arguments passed to :func:`scipy.integrate.quadrature` if needed.

        Returns
        -------
          monthly equivalent volume: numpy.ndarray[float]
        """
        t = self._validate_ndarray(t)
        if t0 is None:
            t0 = 0.0
        t0 = cast(ndarray, np.atleast_1d(t0).astype(float))
        return np.diff(self._Nfn(t, **kwargs), prepend=self._Nfn(t0)) \
            / np.diff(t, prepend=t0) * DAYS_PER_MONTH

    def D(self, t: Union[float, ndarray]) -> ndarray:
        """
        Defines the model D-parameter function.

        Parameters
        ----------
          t: Union[float, numpy.ndarray[float]]
            An array of times at which to evaluate the function.

        Returns
        -------
          D-parameter: numpy.ndarray[float]
        """
        t = self._validate_ndarray(t)
        return self._Dfn(t)

    def beta(self, t: Union[float, ndarray]) -> ndarray:
        """
        Defines the model beta-parameter function.

        Parameters
        ----------
          t: Union[float, numpy.ndarray[float]]
            An array of times at which to evaluate the function.

        Returns
        -------
          beta-parameter: numpy.ndarray[float]
        """
        t = self._validate_ndarray(t)
        return self._betafn(t)

    def b(self, t: Union[float, ndarray]) -> ndarray:
        """
        Defines the model b-parameter function.

        Parameters
        ----------
          t: Union[float, numpy.ndarray[float]]
            An array of times at which to evaluate the function.

        Returns
        -------
          b-parameter: numpy.ndarray[float]
        """
        t = self._validate_ndarray(t)
        return self._bfn(t)

    @abstractmethod
    def _qfn(self, t: ndarray) -> ndarray:
        raise NotImplementedError

    @abstractmethod
    def _Nfn(self, t: ndarray, **kwargs: Any) -> ndarray:
        raise NotImplementedError

    @abstractmethod
    def _Dfn(self, t: ndarray) -> ndarray:
        raise NotImplementedError

    @abstractmethod
    def _Dfn2(self, t: ndarray) -> ndarray:
        raise NotImplementedError

    @abstractmethod
    def _betafn(self, t: ndarray) -> ndarray:
        raise NotImplementedError

    @abstractmethod
    def _bfn(self, t: ndarray) -> ndarray:
        raise NotImplementedError

    def _integrate_with(self, fn: Callable[[ndarray], ndarray], t: ndarray,
                        **kwargs: Any) -> ndarray:
        kwargs.setdefault('n', 100)
        return np.cumsum(list(starmap(
            lambda t0, t1: fixed_quad(fn, t0, t1, **kwargs)[0],
            self._iter_t(t)
        )))

    def _validate(self) -> None:
        # this will be called by the __post_init__ hook - subclasses should
        #   do any necessary additional validation or caching here
        pass

    def __post_init__(self) -> None:
        self._set_defaults()
        for desc in self.get_param_descs():
            param = getattr(self, desc.name)
            if desc.lower_bound is not None:
                if desc.exclude_lower_bound:
                    if param <= desc.lower_bound:
                        raise ValueError(f'{desc.name} <= {desc.lower_bound}')
                else:
                    if param < desc.lower_bound:
                        raise ValueError(f'{desc.name} < {desc.lower_bound}')
            if desc.upper_bound is not None:
                if desc.exclude_upper_bound:
                    if param >= desc.upper_bound:
                        raise ValueError(f'{desc.name} >= {desc.upper_bound}')
                else:
                    if param > desc.upper_bound:
                        raise ValueError(f'{desc.name} > {desc.upper_bound}')
        self._validate()

    @abstractmethod
    def _set_defaults(self) -> None:
        raise NotImplementedError

    @classmethod
    @abstractmethod
    def get_param_descs(cls) -> List[ParamDesc]:
        raise NotImplementedError

    # don't call this in a loop - it's a utility for e.g. test suites
    @classmethod
    def get_param_desc(cls, name: str) -> ParamDesc:
        for p in cls.get_param_descs():
            if p.name == name:
                return p  # pragma: no cover
        raise KeyError(name)

    # only exists to satisfy mypy
    def __init__(self, *args: float) -> None:
        raise NotImplementedError

    @classmethod
    def from_params(cls: Type['DeclineCurve'], params: Sequence[float]) -> 'DeclineCurve':
        """
        Construct a model from a sequence of parameters.
        """
        if len(cls.get_param_descs()) != len(params):
            raise ValueError('Params sequence does not have required length')
        return cls(*params)

    @staticmethod
    def _validate_ndarray(x: Union[float, ndarray]) -> ndarray:
        """
        Ensure the time array is a 1d arary of floats.
        """
        return np.atleast_1d(x).astype(float)

    @staticmethod
    def _iter_t(t: ndarray) -> Iterator[Tuple[float, float]]:
        """
        Yield a tuple of time intervals.
        """
        t0 = 0.0
        for t1 in t:
            yield(t0, t1)
            t0 = t1
        return

    @staticmethod
    def get_time() -> ndarray:
        return get_time()

    @staticmethod
    def get_time_monthly_vol() -> ndarray:
        return get_time_monthly_vol()


class PrimaryPhase(DeclineCurve):
    """
    Extends :class:`DeclineCurve` for a primary phase forecast.
    Adds the capability to link a secondary (associated) phase model.
    """
    secondary: 'SecondaryPhase'

    def _set_defaults(self) -> None:
        # this is a little naughty: bypass the "frozen" protection, just this once...
        # naturally, this should only be called during the __post_init__ process
        secondary = NullSecondaryPhase()
        object.__setattr__(secondary, 'primary', self)
        object.__setattr__(self, 'secondary', secondary)

    def add_secondary(self, secondary: 'SecondaryPhase') -> None:
        """
        Attach a secondary phase model to this primary phase model.

        Parameters
        ----------
          secondary: SecondaryPhase
            A model that inherits the :class:`SecondaryPhase` class.

        Returns
        -------
          None
        """
        # bypass the "frozen" protection to link to the secondary phase
        object.__setattr__(secondary, 'primary', self)
        object.__setattr__(self, 'secondary', secondary)


class SecondaryPhase(DeclineCurve):
    """
    Extends :class:`DeclineCurve` for a secondary (associated) phase forecast.
    Adds the capability to link a primary phase model.
    Defines the :meth:`gor` and :meth:`cgr` functions. Each model must implement the
    defined abstract method.

    """
    primary: 'PrimaryPhase'

    def _set_defaults(self) -> None:
        # this is a little naughty: bypass the "frozen" protection, just this once...
        # naturally, this should only be called during the __post_init__ process
        primary = NullPrimaryPhase()
        object.__setattr__(primary, 'secondary', self)
        object.__setattr__(self, 'primary', primary)

    def gor(self, t: Union[float, ndarray]) -> ndarray:
        """
        Defines the model GOR function.
        Implementation is idential to CGR function.

        Parameters
        ----------
          t: Union[float, numpy.ndarray[float]]
            An array of times at which to evaluate the function.

        Returns
        -------
          GOR: numpy.ndarray[float]
        """
        t = self._validate_ndarray(t)
        return self._yieldfn(t)

    def cgr(self, t: Union[float, ndarray]) -> ndarray:
        """
        Defines the model CGR function.
        Implementation is identical to GOR function.

        Parameters
        ----------
          t: Union[float, numpy.ndarray[float]]
            An array of times at which to evaluate the function.

        Returns
        -------
          numpy.ndarray[float]
        """
        t = self._validate_ndarray(t)
        return self._yieldfn(t)

    @abstractmethod
    def _yieldfn(self, t: ndarray) -> ndarray:
        raise NotImplementedError


# Must import these here to avoid circular dependency
from .primary import NullPrimaryPhase
from .secondary import NullSecondaryPhase
