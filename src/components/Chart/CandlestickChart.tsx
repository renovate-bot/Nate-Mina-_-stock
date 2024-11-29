import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import { CandlestickData } from '../../types/stock';

interface Props {
  data: CandlestickData[];
  timeframe: string;
}

export function CandlestickChart({ data, timeframe }: Props) {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: '#1C1C1C' },
        textColor: '#FFFFFF',
      },
      grid: {
        vertLines: { color: '#2B2B2B' },
        horzLines: { color: '#2B2B2B' },
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#228B22',
      downColor: '#DC143C',
      borderVisible: false,
      wickUpColor: '#228B22',
      wickDownColor: '#DC143C',
    });

    candlestickSeries.setData(data);
    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [data, timeframe]);

  return (
    <div className="w-full h-[400px] bg-[#1C1C1C]" ref={chartContainerRef} />
  );
}