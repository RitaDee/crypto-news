import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: {},
  isFectching: false,
};

export const fetchCoinsDetail = createAsyncThunk('coinsDetails/fetch', async (id) => {
  const response = await fetch(`https://api.coinstats.app/public/v1/coins/${id}`);
  const data = await response.json();
  console.log('helo', data);
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
        list: action.payload.coin,
      }))
      .addCase(fetchCoinsDetail.pending, (state) => ({
        ...state,
        isFectching: true,
      }));
  },
});

export default coinsDetailsSlice.reducer;
