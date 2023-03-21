import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './routes/Home';
import Details from './routes/Details';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
