import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCoins } from '../Redux/coins/CoinsSlice';
import { fetchCoinsDetail } from '../Redux/details/CoinsDetailsSlice';
import CoinList from '../components/CoinList';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins);
    dispatch(fetchCoinsDetail('bitcoin'));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Header />
      <CoinList />
    </>
  );
};

export default Home;
