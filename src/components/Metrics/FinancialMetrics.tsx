import React from 'react';
import { StockData } from '../../types/stock';
import { formatNumber, formatPercent } from '../../utils/formatters';

interface Props {
  data: StockData;
}

export function FinancialMetrics({ data }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-[#1C1C1C] rounded-lg">
      <MetricCard
        label="Price"
        value={`$${data.price}`}
        change={data.changePercent}
      />
      <MetricCard
        label="Volume"
        value={formatNumber(data.volume)}
        subValue={`Avg: ${formatNumber(data.avgVolume)}`}
      />
      <MetricCard
        label="Market Cap"
        value={`$${formatNumber(data.marketCap)}`}
      />
      <MetricCard
        label="P/E Ratio"
        value={formatNumber(data.peRatio)}
      />
      <MetricCard
        label="EPS"
        value={`$${formatNumber(data.eps)}`}
      />
      <MetricCard
        label="Dividend Yield"
        value={formatPercent(data.dividendYield)}
      />
      <MetricCard
        label="52W Range"
        value={`$${data.weekLow52} - $${data.weekHigh52}`}
      />
      <MetricCard
        label="Beta"
        value={formatNumber(data.beta)}
      />
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  change?: number;
  subValue?: string;
}

function MetricCard({ label, value, change, subValue }: MetricCardProps) {
  return (
    <div className="p-3 bg-[#252525] rounded-md">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-lg font-semibold text-white">{value}</div>
      {change !== undefined && (
        <div className={change >= 0 ? 'text-[#228B22]' : 'text-[#DC143C]'}>
          {formatPercent(change)}
        </div>
      )}
      {subValue && <div className="text-sm text-gray-400">{subValue}</div>}
    </div>
  );
}