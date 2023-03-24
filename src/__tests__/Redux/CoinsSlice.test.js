import { configureStore } from '@reduxjs/toolkit';
import CoinsSlice, { coinsFilter } from '../../Redux/coins/CoinsSlice';

describe('CoinsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        coins: CoinsSlice,
      },
    });
  });

  it('should filter the coin', () => {
    store.dispatch(coinsFilter('coins'));

    expect(store.getState().coins.list.length).toEqual(0);
  });
});
