/* eslint-disable no-unused-vars */
export enum ScreenName {
  Home = 'Home',
  Cryptos = 'Cryptos',
  Details = 'Details',
}

export type RootStackParamList = {
  [ScreenName.Home]: undefined;
  [ScreenName.Cryptos]: undefined;
  [ScreenName.Details]: { id: string };
};
