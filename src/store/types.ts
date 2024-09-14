export interface Crypto {
  symbol: string;
  rate: number;
  ask: number;
  bid: number;
  diff24h: number;
}

export interface AppState {
  cryptos: Crypto[];
  selectedCrypto: Crypto | null;
}
