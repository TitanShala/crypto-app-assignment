import { CryptoWithUsdValue, CryptocurrencyPairs } from '../api/crypto/types';

export interface AppState {
  loading: boolean;
  error: string | null;
  cryptos: CryptoWithUsdValue[] | null;
  selectedCrypto: CryptocurrencyPairs | null;
}
