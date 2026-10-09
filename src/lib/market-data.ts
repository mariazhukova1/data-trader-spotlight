export type Stock = { symbol: string; name: string; price: number; change: number; volume: string; cap: string; sector: string; mark: string };
export const stocks: [Stock, ...Stock[]] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 227.63, change: 1.24, volume: '48.2M', cap: '3.46T', sector: 'Technology', mark: 'apple' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 134.80, change: 3.42, volume: '182.5M', cap: '3.30T', sector: 'Technology', mark: 'nvidia' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 428.76, change: 0.86, volume: '21.4M', cap: '3.19T', sector: 'Technology', mark: 'microsoft' },
  { symbol: 'TSLA', name: 'Tesla, Inc.', price: 248.50, change: -1.68, volume: '86.7M', cap: '793.2B', sector: 'Consumer cyclical', mark: 'tesla' },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 186.42, change: 1.12, volume: '34.6M', cap: '1.95T', sector: 'Consumer cyclical', mark: 'amazon' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 165.87, change: -0.42, volume: '25.8M', cap: '2.04T', sector: 'Communication', mark: 'google' },
  { symbol: 'META', name: 'Meta Platforms, Inc.', price: 576.47, change: 2.18, volume: '16.9M', cap: '1.46T', sector: 'Communication', mark: 'meta' },
];
export const indices = [
  { name: 'S&P 500', value: '5,751.13', change: '+0.97%', positive: true },
  { name: 'NASDAQ', value: '18,137.85', change: '+1.45%', positive: true },
  { name: 'DOW JONES', value: '42,352.75', change: '+0.81%', positive: true },
  { name: 'VIX', value: '19.21', change: '−2.34%', positive: false },
];
export function chartData(stock: Stock, range: string) {
  const seed = stock.symbol.charCodeAt(0) + range.length * 7;
  return Array.from({ length: 66 }, (_, i) => {
    const trend = i / 65 * 7;
    const wave = Math.sin(i * .62 + seed) * 1.1 + Math.sin(i * 1.8) * .46;
    const value = stock.price - 8 + trend + wave;
    return { time: i, price: Number(value.toFixed(2)), volume: 12 + ((i * 17 + seed) % 37), open: value - Math.sin(i * 2) * .8, close: value, high: value + .7, low: value - 1 };
  });
}
