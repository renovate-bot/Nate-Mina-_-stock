export interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  avgVolume: number;
  marketCap: number;
  peRatio: number;
  eps: number;
  dividendYield: number;
  weekHigh52: number;
  weekLow52: number;
  beta: number;
}

export interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export type TimeFrame = '1D' | '1W' | '1M' | '3M' | '1Y' | '5Y';