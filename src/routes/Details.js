import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CoinDetails from '../components/CoinDetails';
import Header from '../components/Header';
import NavDetail from '../components/NavDetail';
import { fetchCoinsDetail } from '../Redux/details/CoinsDetailsSlice';

const Details = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoinsDetail('bitcoin'));
  });
  return (
    <>
      <Header />
      <NavDetail />
      <CoinDetails />
    </>
  );
};

export default Details;
