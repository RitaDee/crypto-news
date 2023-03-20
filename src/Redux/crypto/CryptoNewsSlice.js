import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://financialmodelingprep.com/api/v4/crypto_news?page=0&apikey=68cda1598b1c39d73673af76bd5d5f33';

const initialState = {
  list: [],
  isFetching: false,
};

export const fetchCryptoNews = createAsyncThunk('crypto/fetch', async () => {
  const response = fetch(url);
  const data = await response.json();
  return data;
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoNews.fulfilled, (state, action) => ({
        ...state,
        isFetching: false,
        list: action.payload,
      }))
      .addCase(fetchCryptoNews.pending, (state) => ({
        ...state,
        isFetching: true,
      }));
  },
});

export default cryptoSlice.reducer;
