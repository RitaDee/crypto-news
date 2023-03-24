import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCoins } from './Redux/coins/CoinsSlice';
import './App.css';

// import Navbar from './components/Navbar';
import Home from './routes/Home';
import Details from './routes/Details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
    // dispatch(fetchCoinsDetail('bitcoin'));
  }, [dispatch]);
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
