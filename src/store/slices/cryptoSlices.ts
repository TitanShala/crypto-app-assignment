import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Crypto, AppState } from '../types';
import { fetchCryptos } from '../../api/crypto';

const initialState: AppState = {
  loading: true,
  error: null,
  cryptos: [],
  selectedCrypto: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptos(state, action: PayloadAction<Crypto[]>) {
      state.cryptos = action.payload;
    },
    setSelectedCrypto(state, action: PayloadAction<Crypto | null>) {
      state.selectedCrypto = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCryptosThunk.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCryptosThunk.fulfilled, (state, action) => {
      state.loading = false;
      const stringified = JSON.stringify(action.payload);
      const cutted = stringified.slice(0, 500);
      console.log(cutted);
      state.cryptos = action.payload;
    });
    builder.addCase(fetchCryptosThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred.';
    });
  },
});

export const { setCryptos, setSelectedCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;

export const fetchCryptosThunk = createAsyncThunk(
  'cryptos/fetchCryptos',
  async () => {
    return await fetchCryptos();
  },
);
