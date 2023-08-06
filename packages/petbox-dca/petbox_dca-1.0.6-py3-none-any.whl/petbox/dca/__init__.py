__version__ = '1.0.6'

from . import base, primary, associated
from .base import (get_time, get_time_monthly_vol,
                   DeclineCurve, PrimaryPhase,
                   AssociatedPhase, BothAssociatedPhase,
                   SecondaryPhase, WaterPhase,
                   DAYS_PER_MONTH, DAYS_PER_YEAR)
from .primary import NullPrimaryPhase, MultisegmentHyperbolic, MH, THM, PLE, SE, Duong
from .associated import NullAssociatedPhase, PLYield
from .bourdet import bourdet
