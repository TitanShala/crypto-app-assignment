import { CryptoRatesResponse } from '../api/crypto/types';

export interface Crypto extends CryptoRatesResponse {}

export interface AppState {
  loading: boolean;
  error: string | null;
  cryptos: Crypto[];
  selectedCrypto: Crypto | null;
}
