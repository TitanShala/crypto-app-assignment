import { API_PATH, apiRequest } from '..';
import { CryptoRatesResponse } from './types';

export const fetchCryptos = async () => {
  const { data } = await apiRequest<{}, CryptoRatesResponse[]>({
    method: 'GET',
    url: API_PATH.cryptos,
  });

  return data;
};
