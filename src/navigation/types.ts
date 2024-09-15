import { CryptoWithUsdValue } from '../api/crypto/types';

/* eslint-disable no-unused-vars */
export enum ScreenName {
  Home = 'Home',
  Cryptos = 'Cryptos',
  Details = 'Details',
}

export type RootStackParamList = {
  [ScreenName.Home]: undefined;
  [ScreenName.Cryptos]: undefined;
  [ScreenName.Details]: { data: CryptoWithUsdValue };
};
