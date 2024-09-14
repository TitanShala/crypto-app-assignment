export interface CryptoData {
  rate: number;
  ask: number;
  bid: number;
  diff24h: number;
}

export interface CryptoRatesResponse {
  [symbol: string]: {
    [pair: string]: CryptoData;
  };
}
