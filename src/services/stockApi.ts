import { StockData, CandlestickData } from '../types/stock';

const API_BASE_URL = 'https://query1.finance.yahoo.com/v8/finance';

// Mock data for development
const mockStockData: StockData = {
  symbol: 'AAPL',
  price: 173.25,
  change: 2.75,
  changePercent: 0.0162,
  volume: 52_436_789,
  avgVolume: 48_567_890,
  marketCap: 2_750_000_000_000,
  peRatio: 28.5,
  eps: 6.08,
  dividendYield: 0.0055,
  weekHigh52: 182.34,
  weekLow52: 142.67,
  beta: 1.12,
};

const mockCandlestickData: CandlestickData[] = [
  { time: '2024-01-01', open: 170.25, high: 172.50, low: 169.75, close: 171.80 },
  { time: '2024-01-02', open: 171.80, high: 174.25, low: 171.50, close: 173.25 },
  { time: '2024-01-03', open: 173.25, high: 175.50, low: 172.75, close: 174.90 },
  { time: '2024-01-04', open: 174.90, high: 176.25, low: 173.50, close: 175.60 },
  { time: '2024-01-05', open: 175.60, high: 177.75, low: 174.25, close: 176.80 },
];

export async function fetchStockData(symbol: string): Promise<StockData> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock data for development
  return {
    ...mockStockData,
    symbol,
  };
}

export async function fetchCandlestickData(
  symbol: string,
  timeframe: string
): Promise<CandlestickData[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return mockCandlestickData;
}