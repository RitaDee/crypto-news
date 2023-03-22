import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coinstats.app/public/v1/coins';

const initialState = {
  list: [],
  isFetching: false,
};

export const fetchCoins = createAsyncThunk('coins/fetch', async () => {
  const response = await fetch(url);
  const data = response.json();
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
        list: action.payload.coins,
      }))
      .addCase(fetchCoins.pending, (state) => ({
        ...state,
        isFetching: true,
      }));
  },
});

export const { coinsFilter } = coinsSlice.actions;
export default coinsSlice.reducer;
