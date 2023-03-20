import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://financialmodelingprep.com/api/v4/crypto_news?page=0&apikey=68cda1598b1c39d73673af76bd5d5f33';

export const fetchCryptoNews = createAsyncThunk('cryptoNews/fetch', async () => {
  const response = fetch(url);
  const data = await response.json();
  return data;
});

const cryptoSlice = createSlice({
    
})
