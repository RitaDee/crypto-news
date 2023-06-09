import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/CoinsSlice';
import coinsDetailsReducer from './details/CoinsDetailsSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    coinsDetails: coinsDetailsReducer,
  },
});

export default store;
