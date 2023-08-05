"""
Copyright 2019 Goldman Sachs.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
"""
from abc import ABCMeta, abstractmethod
from concurrent.futures import Future
from copy import copy
import datetime as dt
from typing import Iterable, Optional, Tuple, Union

import pandas as pd

from gs_quant.base import RiskKey
from gs_quant.common import AssetClass
from gs_quant.datetime import point_sort_order
from gs_quant.target.risk import RiskMeasure, RiskMeasureType, RiskMeasureUnit, \
    PricingDateAndMarketDataAsOf as __PricingDateAndMarketDataAsOf

__column_sort_fns = {
    'label1': point_sort_order,
    'mkt_point': point_sort_order,
    'point': point_sort_order
}
__risk_columns = ('date', 'time', 'mkt_type', 'mkt_asset', 'mkt_class', 'mkt_point')


class RiskResult:

    def __init__(self, result, risk_measures: Iterable[RiskMeasure]):
        self.__risk_measures = tuple(risk_measures)
        self.__result = result

    @property
    def done(self) -> bool:
        return self.__result.done()

    @property
    def risk_measures(self) -> Tuple[RiskMeasure]:
        return self.__risk_measures

    @property
    def _result(self):
        return self.__result


class ResultInfo(metaclass=ABCMeta):

    def __init__(
        self,
        risk_key: RiskKey,
        unit: Optional[dict] = None,
        error: Optional[Union[str, dict]] = None,
        calculation_time: Optional[int] = None,
        queueing_time: Optional[int] = None
    ):
        self.__risk_key = risk_key
        self.__unit = unit
        self.__error = error
        self.__calculation_time = calculation_time
        self.__queueing_time = queueing_time

    @property
    @abstractmethod
    def raw_value(self):
        ...

    @property
    def risk_key(self) -> RiskKey:
        return self.__risk_key

    @property
    def unit(self) -> dict:
        """The units of this result"""
        return self.__unit

    @property
    def error(self) -> Union[str, dict]:
        """Any error associated with this result"""
        return self.__error

    @property
    def calculation_time(self) -> int:
        """The time (in milliseconds) taken to compute this result"""
        return self.__calculation_time

    @property
    def queueing_time(self) -> int:
        """The time (in milliseconds) for which this computation was queued"""
        return self.__queueing_time

    @staticmethod
    def composition_info(components: Iterable):
        dates = []
        values = []
        errors = {}
        risk_key = None
        unit = None

        for component in components:
            date = component.risk_key.date
            risk_key = component.risk_key.base if risk_key is None else risk_key
            if risk_key != component.risk_key.base:
                raise RuntimeError('Cannot compose heterogeneous results')

            if isinstance(component, (ErrorValue, Exception)):
                errors[date] = component
            else:
                values.append(component.raw_value)
                dates.append(date)
                unit = unit or component.unit

        return dates, values, errors, risk_key, unit


class ErrorValue(ResultInfo):

    def __init__(self, risk_key: RiskKey, error: Union[str, dict]):
        super().__init__(risk_key, error=error)

    def __repr__(self):
        return self.error

    @property
    def raw_value(self):
        return None


class ScalarWithInfo(ResultInfo, metaclass=ABCMeta):

    def __init__(
            self,
            risk_key: RiskKey,
            value: Union[float, str],
            unit: Optional[dict] = None,
            error: Optional[Union[str, dict]] = None,
            calculation_time: Optional[float] = None,
            queueing_time: Optional[float] = None):
        float.__init__(value)
        ResultInfo.__init__(
            self,
            risk_key,
            unit=unit,
            error=error,
            calculation_time=calculation_time,
            queueing_time=queueing_time)

    @property
    @abstractmethod
    def raw_value(self):
        ...

    @staticmethod
    def compose(components: Iterable):
        dates, values, errors, risk_key, unit = ResultInfo.composition_info(components)
        return SeriesWithInfo(risk_key, pd.Series(index=dates, data=values), unit=unit, error=errors)


class FloatWithInfo(ScalarWithInfo, float):

    def __new__(cls,
                risk_key: RiskKey,
                value: Union[float, str],
                unit: Optional[str] = None,
                error: Optional[str] = None,
                calculation_time: Optional[float] = None,
                queueing_time: Optional[float] = None):
        return float.__new__(cls, value)

    @property
    def raw_value(self) -> float:
        return float(self)

    def __repr__(self):
        return self.error if self.error else float.__repr__(self)


class StringWithInfo(ScalarWithInfo, str):

    def __new__(cls,
                risk_key: RiskKey,
                value: Union[float, str],
                unit: Optional[dict] = None,
                error: Optional[str] = None,
                calculation_time: Optional[float] = None,
                queueing_time: Optional[float] = None):
        return str.__new__(cls, value)

    @property
    def raw_value(self) -> str:
        return str(self)

    def __repr__(self):
        return self.error if self.error else str.__repr__(self)


class SeriesWithInfo(pd.Series, ResultInfo):

    def __init__(
            self,
            risk_key: RiskKey,
            *args,
            unit: Optional[dict] = None,
            error: Optional[Union[str, dict]] = None,
            calculation_time: Optional[int] = None,
            queueing_time: Optional[int] = None,
            **kwargs
    ):
        pd.Series.__init__(self, *args, **kwargs)
        ResultInfo.__init__(
            self,
            risk_key,
            unit=unit,
            error=error,
            calculation_time=calculation_time,
            queueing_time=queueing_time)

        self.index.name = 'date'

    def __repr__(self):
        return self.error if self.error else pd.Series.__repr__(self)

    @property
    def raw_value(self) -> pd.Series:
        return pd.Series(self)


class DataFrameWithInfo(pd.DataFrame, ResultInfo):

    def __init__(
            self,
            risk_key: RiskKey,
            *args,
            unit: Optional[dict] = None,
            error: Optional[Union[str, dict]] = None,
            calculation_time: Optional[float] = None,
            queueing_time: Optional[float] = None,
            **kwargs
    ):
        pd.DataFrame.__init__(self, *args, **kwargs)
        properties = [i for i in dir(ResultInfo) if isinstance(getattr(ResultInfo, i), property)]
        internal_names = properties + ['_ResultInfo__' + i for i in properties if i != 'raw_value']
        self._internal_names.append(internal_names)
        self._internal_names_set.update(internal_names)
        ResultInfo.__init__(
            self,
            risk_key,
            unit=unit,
            error=error,
            calculation_time=calculation_time,
            queueing_time=queueing_time)

    def __repr__(self):
        return self.error if self.error else pd.DataFrame.__repr__(self)

    @property
    def raw_value(self) -> pd.DataFrame:
        return pd.DataFrame(self)

    @staticmethod
    def compose(components: Iterable):
        dates, values, errors, risk_key, unit = ResultInfo.composition_info(components)
        df = pd.concat([v.assign(date=d) if v.index.name != 'date' and 'date' not in v else v
                        for d, v in zip(dates, values)]).set_index('date')

        return DataFrameWithInfo(risk_key, df, unit=unit, error=errors)


class PricingDateAndMarketDataAsOf(__PricingDateAndMarketDataAsOf):

    def __repr__(self):
        return '{} : {}'.format(self.pricing_date, self.market_data_as_of)


def aggregate_risk(results: Iterable[Union[DataFrameWithInfo, Future]], threshold: Optional[float] = None)\
        -> pd.DataFrame:
    """
    Combine the results of multiple InstrumentBase.calc() calls, into a single result

    :param results: An iterable of Dataframes and/or Futures (returned by InstrumentBase.calc())
    :param threshold: exclude values whose absolute value falls below this threshold
    :return: A Dataframe with the aggregated results

    **Examples**

    >>> from gs_quant.instrument import IRCap, IRFloor
    >>> from gs_quant.markets import PricingContext
    >>> from gs_quant.risk import IRDelta, IRVega
    >>>
    >>> cap = IRCap('5y', 'GBP')
    >>> floor = IRFloor('5y', 'GBP')
    >>> instruments = (cap, floor)
    >>>
    >>> with PricingContext():
    >>>     delta_f = [inst.calc(IRDelta) for inst in instruments]
    >>>     vega_f = [inst.calc(IRVega) for inst in (cap, floor)]
    >>>
    >>> delta = aggregate_risk(delta_f, threshold=0.1)
    >>> vega = aggregate_risk(vega_f)

    delta_f and vega_f are lists of futures, where the result will be a Dataframe
    delta and vega are Dataframes, representing the merged risk of the individual instruments
    """
    dfs = [r.result().raw_value if isinstance(r, Future) else r.raw_value for r in results]
    result = pd.concat(dfs)
    result = result.groupby([c for c in result.columns if c != 'value']).sum()
    result = pd.DataFrame.from_records(result.to_records())

    if threshold is not None:
        result = result[result.value.abs() > threshold]

    return sort_risk(result)


def aggregate_results(results: Iterable[Union[dict, DataFrameWithInfo, FloatWithInfo, SeriesWithInfo]])\
        -> Union[dict, DataFrameWithInfo, FloatWithInfo, SeriesWithInfo]:
    unit = None
    risk_key = None
    results = tuple(results)

    for result in results:
        if result.error:
            raise ValueError('Cannot aggregate results in error')

        if not isinstance(result, type(results[0])):
            raise ValueError('Cannot aggregate heterogeneous types')

        if result.unit:
            if unit and unit != result.unit:
                raise ValueError('Cannot aggregate results with different units')

            unit = unit or result.unit

        if risk_key and risk_key != result.risk_key:
            raise ValueError('Cannot aggregate results with different pricing keys')

        risk_key = risk_key or result.risk_key

    inst = next(iter(results))
    if isinstance(inst, dict):
        return dict((k, aggregate_results([r[k] for r in results])) for k in inst.keys())
    elif isinstance(inst, FloatWithInfo):
        return FloatWithInfo(risk_key, sum(results), unit=unit)
    elif isinstance(inst, SeriesWithInfo):
        return SeriesWithInfo(risk_key, sum(results), unit=unit)
    elif isinstance(inst, DataFrameWithInfo):
        return DataFrameWithInfo(risk_key, aggregate_risk(results), unit=unit)


def subtract_risk(left: DataFrameWithInfo, right: DataFrameWithInfo) -> pd.DataFrame:
    """Subtract bucketed risk. Dimensions must be identical

    :param left: Results to substract from
    :param right: Results to substract

    **Examples**

    >>> from gs_quant.datetime.date import business_day_offset
    >>> from gs_quant.instrument IRSwap
    >>> from gs_quant.markets import PricingContext
    >>> from gs_quant.risk import IRDelta
    >>> import datetime as dt
    >>>
    >>> ir_swap = IRSwap('Pay', '10y', 'USD')
    >>> delta_today = ir_swap.calc(IRDelta)
    >>>
    >>> with PricingContext(pricing_date=business_day_offset(dt.date.today(), -1, roll='preceding')):
    >>>     delta_yday_f = ir_swap.calc(IRDelta)
    >>>
    >>> delta_diff = subtract_risk(delta_today, delta_yday_f.result())
    """
    assert(left.columns.names == right.columns.names)
    assert('value' in left.columns.names)

    right_negated = copy(right)
    right_negated.value *= -1

    return aggregate_risk((left, right_negated))


def sort_risk(df: pd.DataFrame, by: Tuple[str, ...] = __risk_columns) -> pd.DataFrame:
    """
    Sort bucketed risk

    :param df: Input Dataframe
    :param by: Columns to sort by
    :return: A sorted Dataframe
    """
    columns = tuple(df.columns)
    indices = [columns.index(c) if c in columns else -1 for c in by]
    fns = [__column_sort_fns.get(c) for c in columns]

    def cmp(row) -> tuple:
        return tuple(fns[i](row[i]) if fns[i] else row[i] for i in indices if i != -1)

    data = sorted((tuple(r)[1:] for r in df.to_records()), key=cmp)
    fields = [f for f in by if f in columns]
    fields.extend(f for f in columns if f not in fields)

    result = pd.DataFrame.from_records(data, columns=columns)[fields]
    if 'date' in result:
        result = result.set_index('date')

    return result


def __risk_measure_with_doc_string(
    name: str,
    doc: str,
    measure_type: RiskMeasureType,
    asset_class: Optional[AssetClass] = None,
    unit: Optional[RiskMeasureUnit] = None
) -> RiskMeasure:
    measure = RiskMeasure(measure_type=measure_type, asset_class=asset_class, unit=unit, name=name)
    measure.__doc__ = doc
    return measure


DollarPrice = __risk_measure_with_doc_string('DollarPrice', 'Present value in USD', RiskMeasureType.Dollar_Price)
Price = __risk_measure_with_doc_string('Price', 'Present value in local currency', RiskMeasureType.PV)
ForwardPrice = __risk_measure_with_doc_string(
    'ForwardPrice',
    'Forward price',
    RiskMeasureType.Forward_Price,
    unit=RiskMeasureUnit.BPS)
BaseCPI = __risk_measure_with_doc_string('BaseCPI', 'Base CPI level', RiskMeasureType.BaseCPI)
Theta = __risk_measure_with_doc_string('Theta', '1 day Theta', RiskMeasureType.Theta)
EqDelta = __risk_measure_with_doc_string(
    'EqDelta',
    'Equity Delta',
    RiskMeasureType.Delta,
    asset_class=AssetClass.Equity)
EqGamma = __risk_measure_with_doc_string(
    'EqGamma',
    'Equity Gamma',
    RiskMeasureType.Gamma,
    asset_class=AssetClass.Equity)
EqVega = __risk_measure_with_doc_string('EqVega', 'Equity Vega', RiskMeasureType.Vega, asset_class=AssetClass.Equity)
EqSpot = __risk_measure_with_doc_string(
    'EqSpot',
    'Equity Spot Level',
    RiskMeasureType.Spot, asset_class=AssetClass.Equity)
EqAnnualImpliedVol = __risk_measure_with_doc_string(
    'EqAnnualImpliedVol',
    'Equity Annual Implied Volatility (%)',
    RiskMeasureType.Annual_Implied_Volatility,
    asset_class=AssetClass.Equity,
    unit=RiskMeasureUnit.Percent)
CommodDelta = __risk_measure_with_doc_string(
    'CommodDelta',
    'Commodity Delta',
    RiskMeasureType.Delta,
    asset_class=AssetClass.Commod)
CommodTheta = __risk_measure_with_doc_string(
    'CommodTheta',
    'Commodity Theta',
    RiskMeasureType.Theta,
    asset_class=AssetClass.Commod)
CommodVega = __risk_measure_with_doc_string(
    'CommodVega',
    'Commodity Vega',
    RiskMeasureType.Vega,
    asset_class=AssetClass.Commod)
FairVolStrike = __risk_measure_with_doc_string(
    'FairVolStrike',
    'Fair Volatility Strike Value of a Variance Swap',
    RiskMeasureType.FairVolStrike)
FairVarStrike = __risk_measure_with_doc_string(
    'FairVarStrike',
    'Fair Variance Strike Value of a Variance Swap',
    RiskMeasureType.FairVarStrike)
FXDelta = __risk_measure_with_doc_string('FXDelta', 'FX Delta', RiskMeasureType.Delta, asset_class=AssetClass.FX)
FXGamma = __risk_measure_with_doc_string('FXGamma', 'FX Gamma', RiskMeasureType.Gamma, asset_class=AssetClass.FX)
FXVega = __risk_measure_with_doc_string('FXVega', 'FX Vega', RiskMeasureType.Vega, asset_class=AssetClass.FX)
FXSpot = __risk_measure_with_doc_string('FXSpot', 'FX Spot Rate', RiskMeasureType.Spot, asset_class=AssetClass.FX)
IRBasis = __risk_measure_with_doc_string(
    'IRBasis',
    'Interest Rate Basis',
    RiskMeasureType.Basis,
    asset_class=AssetClass.Rates)
InflationDelta = __risk_measure_with_doc_string(
    'InflationDelta',
    'Inflation Delta',
    RiskMeasureType.InflationDelta,
    asset_class=AssetClass.Rates)
InflationDeltaParallel = __risk_measure_with_doc_string(
    'InflationDeltaParallel',
    'Inflation Parallel Delta',
    RiskMeasureType.ParallelInflationDelta,
    asset_class=AssetClass.Rates)
InflationDeltaParallelLocalCcy = __risk_measure_with_doc_string(
    'InflationDeltaParallelLocalCcy',
    'Inflation Parallel Delta (Local Ccy)',
    RiskMeasureType.ParallelInflationDeltaLocalCcy,
    asset_class=AssetClass.Rates)
IRDelta = __risk_measure_with_doc_string(
    'IRDelta',
    'Interest Rate Delta',
    RiskMeasureType.Delta,
    asset_class=AssetClass.Rates)
IRDeltaParallel = __risk_measure_with_doc_string(
    'IRDeltaParallel',
    'Interest Rate Parallel Delta',
    RiskMeasureType.ParallelDelta,
    asset_class=AssetClass.Rates)
IRDeltaLocalCcy = __risk_measure_with_doc_string(
    'IRDeltaLocalCcy',
    'Interest Rate Delta (Local Ccy)',
    RiskMeasureType.DeltaLocalCcy,
    asset_class=AssetClass.Rates)
IRDeltaParallelLocalCcy = __risk_measure_with_doc_string(
    'IRDeltaParallelLocalCcy',
    'Interest Rate Parallel Delta (Local Ccy)',
    RiskMeasureType.ParallelDeltaLocalCcy,
    asset_class=AssetClass.Rates)
IRXccyDelta = __risk_measure_with_doc_string(
    'IRXccyDelta',
    'Cross-ccy Delta',
    RiskMeasureType.XccyDelta,
    asset_class=AssetClass.Rates)
IRXccyDeltaParallel = __risk_measure_with_doc_string(
    'IRXccyDeltaParallel',
    'Cross-ccy Parallel Delta',
    RiskMeasureType.ParallelXccyDelta,
    asset_class=AssetClass.Rates)
IRXccyDeltaParallelLocalCurrency = __risk_measure_with_doc_string(
    'IRXccyDeltaParallelLocalCurrency',
    'Cross-ccy Parallel Delta (Local Ccy)',
    RiskMeasureType.ParallelXccyDeltaLocalCcy,
    asset_class=AssetClass.Rates)
IRGammaParallel = __risk_measure_with_doc_string(
    'IRGammaParallel',
    'Interest Rate Parallel Gamma',
    RiskMeasureType.ParallelGamma,
    asset_class=AssetClass.Rates)
IRGammaParallelLocalCcy = __risk_measure_with_doc_string(
    'IRGammaParallelLocalCcy',
    'Interest Rate Parallel Gamma (Local Ccy)',
    RiskMeasureType.ParallelGammaLocalCcy,
    asset_class=AssetClass.Rates)
IRVega = __risk_measure_with_doc_string(
    'IRVega',
    'Interest Rate Vega',
    RiskMeasureType.Vega,
    asset_class=AssetClass.Rates)
IRVegaParallel = __risk_measure_with_doc_string(
    'IRVegaParallel',
    'Interest Rate Parallel Vega',
    RiskMeasureType.ParallelVega,
    asset_class=AssetClass.Rates)
IRVegaLocalCcy = __risk_measure_with_doc_string(
    'IRVegaLocalCcy',
    'Interest Rate Vega (Local Ccy)',
    RiskMeasureType.VegaLocalCcy,
    asset_class=AssetClass.Rates)
IRVegaParallelLocalCcy = __risk_measure_with_doc_string(
    'IRVegaParallelLocalCcy',
    'Interest Rate Parallel Vega (Local Ccy)',
    RiskMeasureType.ParallelVegaLocalCcy,
    asset_class=AssetClass.Rates)
IRAnnualImpliedVol = __risk_measure_with_doc_string(
    'IRAnnualImpliedVol',
    'Interest Rate Annual Implied Volatility (%)',
    RiskMeasureType.Annual_Implied_Volatility,
    asset_class=AssetClass.Rates,
    unit=RiskMeasureUnit.Percent)
IRAnnualATMImpliedVol = __risk_measure_with_doc_string(
    'IRAnnualATMImpliedVol',
    'Interest Rate Annual Implied At-The-Money Volatility (%)',
    RiskMeasureType.Annual_ATMF_Implied_Volatility,
    asset_class=AssetClass.Rates,
    unit=RiskMeasureUnit.Percent)
IRDailyImpliedVol = __risk_measure_with_doc_string(
    'IRDailyImpliedVol',
    'Interest Rate Daily Implied Volatility (bps)',
    RiskMeasureType.Daily_Implied_Volatility,
    asset_class=AssetClass.Rates,
    unit=RiskMeasureUnit.BPS)
IRSpotRate = __risk_measure_with_doc_string(
    'IRSpotRate',
    'At-The-Money Spot Rate (%)',
    RiskMeasureType.Spot_Rate,
    asset_class=AssetClass.Rates,
    unit=RiskMeasureUnit.Percent)
IRFwdRate = __risk_measure_with_doc_string(
    'IRFwdRate',
    'Par Rate (%)',
    RiskMeasureType.Forward_Rate,
    asset_class=AssetClass.Rates,
    unit=RiskMeasureUnit.Percent)
CRIFIRCurve = __risk_measure_with_doc_string(
    'CRIFIRCurve',
    'CRIF IR Curve',
    RiskMeasureType.CRIF_IRCurve)
ResolvedInstrumentValues = __risk_measure_with_doc_string(
    'ResolvedInstrumentBaseValues',
    'Resolved InstrumentBase Values',
    RiskMeasureType.Resolved_Instrument_Values
)
Description = __risk_measure_with_doc_string(
    'Description',
    'Description',
    RiskMeasureType.Description
)
Cashflows = __risk_measure_with_doc_string(
    'Cashflows',
    'Cashflows',
    RiskMeasureType.Cashflows
)
MarketDataAssets = __risk_measure_with_doc_string(
    'MarketDataAssets',
    'MarketDataAssets',
    RiskMeasureType.Market_Data_Assets
)
