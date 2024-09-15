import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../types';
import { fetchCryptos } from '../../api/crypto';
import { CryptoWithUsdValue } from '../../api/crypto/types';
import transformDataToCryptoItems from '../../features/cryptos/item/helpers/transformDataToList';

const initialState: AppState = {
  loading: true,
  error: null,
  cryptos: null,
  selectedCrypto: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptos(state, action: PayloadAction<CryptoWithUsdValue[]>) {
      state.cryptos = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCryptosThunk.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCryptosThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      const data = action.payload;

      const transformedData: CryptoWithUsdValue[] =
        transformDataToCryptoItems(data);

      state.cryptos = transformedData;
    });
    builder.addCase(fetchCryptosThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred.';
    });
  },
});

export const { setCryptos } = cryptoSlice.actions;
export default cryptoSlice.reducer;

export const fetchCryptosThunk = createAsyncThunk(
  'cryptos/fetchCryptos',
  async () => {
    return await fetchCryptos();
  },
);
