import { useQuery } from 'react-query';
import { StockData } from '../types/stock';
import { fetchStockData } from '../services/stockApi';

export function useStockData(symbol: string) {
  return useQuery<StockData, Error>(
    ['stockData', symbol],
    () => fetchStockData(symbol),
    {
      refetchInterval: 60000,
      retry: 2,
      staleTime: 30000,
    }
  );
}