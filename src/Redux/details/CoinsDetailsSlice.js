import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  isFectching: false,
};

export const fetchCoinsDetail = createAsyncThunk('coinsDetails/fetch', async (id) => {
  const response = await fetch(`https://api.coinstats.app/public/v1/coins${id}`);
  const data = response.json();
  console.log('Hello', data);
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
