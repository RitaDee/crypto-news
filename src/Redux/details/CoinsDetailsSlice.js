import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  isFectching: false,
};

export const fetchCoinsDetail = createAsyncThunk('coinsDetails/fetch', async (id) => {
  const response = fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await response.json();
  return data;
});

const coinsDetailsSlice = createSlice({
  name: 'coinsDetails',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinsDetail.fulfilled, (state, action) => ({
        ...state,
        isFectching: false,
        list: action.payload,
      }))
      .addCase(fetchCoinsDetail.pending, (state) => ({
        ...state,
        isFectching: true,
      }));
  },
});

export default coinsDetailsSlice.reducer;
