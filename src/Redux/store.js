import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/CoinsSlice';

const store = configureStore({
  reducer: {
    crypto: coinsReducer,
  },
});

export default store;
