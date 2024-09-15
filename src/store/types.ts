import { CryptoDataMap, CryptocurrencyPairs } from '../api/crypto/types';

export interface AppState {
  loading: boolean;
  error: string | null;
  cryptos: CryptoDataMap | null;
  selectedCrypto: CryptocurrencyPairs | null;
}
