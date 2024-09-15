import { API_PATH, apiRequest } from '..';
import { CryptoRatesApiResponse } from './types';

export const fetchCryptos = async () => {
  const { data } = await apiRequest<{}, CryptoRatesApiResponse>({
    method: 'GET',
    url: API_PATH.cryptos,
  });

  return data;
};
