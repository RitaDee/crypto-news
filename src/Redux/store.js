import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './crypto/CoinsSlice';

const store = configureStore({
  reducer: {
    crypto: coinsReducer,
  },
});

export default store;
