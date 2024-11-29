import { useQuery } from 'react-query';
import { CandlestickData, TimeFrame } from '../types/stock';
import { fetchCandlestickData } from '../services/stockApi';

export function useCandlestickData(symbol: string, timeframe: TimeFrame) {
  return useQuery<CandlestickData[], Error>(
    ['candlestickData', symbol, timeframe],
    () => fetchCandlestickData(symbol, timeframe),
    {
      refetchInterval: 60000,
      retry: 2,
      staleTime: 30000,
    }
  );
}