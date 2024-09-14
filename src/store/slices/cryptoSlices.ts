import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Crypto, AppState } from '../types';

const initialState: AppState = {
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
});

export const { setCryptos, setSelectedCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
