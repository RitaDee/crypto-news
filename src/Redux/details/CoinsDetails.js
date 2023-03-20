import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = `https://api.coingecko.com/api/v3/coins/${id}`;

initialState = {
    list: [],
    isFectching: false,
  },

export const fetchCoinsDetail = createAsyncThunk('coinsDetails/fetch', async () => {
  const response = fetch(url);
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
    }
})
