import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const initialState = {
  list: [],
  isFetching: false,
};

export const fetchCoins = createAsyncThunk('coins/fetch', async () => {
  const response = fetch(url);
  const data = await response.json();
  return data;
});

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    coinsFilter: (state, action) => {
      const number = action.payload;
      state.list.filter((item) => item.currentPrice > number);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.fulfilled, (state, action) => ({
        ...state,
        isFetching: false,
        list: action.payload,
      }))
      .addCase(fetchCoins.pending, (state) => ({
        ...state,
        isFetching: true,
      }));
  },
});

export const { coinsFilter } = coinsSlice.actions;
export default coinsSlice.reducer;
