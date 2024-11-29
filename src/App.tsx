import React, { useState } from 'react';
import { useStockData } from './hooks/useStockData';
import { useCandlestickData } from './hooks/useCandlestickData';
import { CandlestickChart } from './components/Chart/CandlestickChart';
import { FinancialMetrics } from './components/Metrics/FinancialMetrics';
import { TimeframeSelector } from './components/Controls/TimeframeSelector';
import { SymbolSearch } from './components/Controls/SymbolSearch';
import { TimeFrame } from './types/stock';
import { Download } from 'lucide-react';

function App() {
  const [symbol, setSymbol] = useState('AAPL');
  const [timeframe, setTimeframe] = useState<TimeFrame>('1D');
  const { data: stockData, isLoading: isStockLoading, error: stockError } = useStockData(symbol);
  const { data: chartData, isLoading: isChartLoading } = useCandlestickData(symbol, timeframe);

  const handleExport = () => {
    if (!stockData) return;
    const csv = Object.entries(stockData)
      .map(([key, value]) => `${key},${value}`)
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${symbol}_${new Date().toISOString()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const isLoading = isStockLoading || isChartLoading;

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Stock Analysis Dashboard</h1>
          <div className="w-64">
            <SymbolSearch onSearch={setSymbol} />
          </div>
        </div>

        {isLoading && (
          <div className="text-center py-20">Loading...</div>
        )}

        {stockError && (
          <div className="text-[#DC143C] text-center py-20">
            {stockError.message}
          </div>
        )}

        {stockData && chartData && (
          <>
            <div className="bg-[#252525] p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <TimeframeSelector
                  selected={timeframe}
                  onChange={setTimeframe}
                />
                <button
                  onClick={handleExport}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600
                           rounded hover:bg-blue-700 transition-colors"
                >
                  <Download size={18} />
                  Export CSV
                </button>
              </div>
              <CandlestickChart
                data={chartData}
                timeframe={timeframe}
              />
            </div>

            <FinancialMetrics data={stockData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;