import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto/CryptoNewsSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;
