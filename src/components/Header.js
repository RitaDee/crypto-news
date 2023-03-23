import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <div className="headerdiv">
    {/* <img alt="cryptocurrencies" src={allcoins} className="imgheader" /> */}
    <div className="subdiv">
      <h1 className="headerh1">CRYPTO MARKET VALUE</h1>
      <p className="headerh2">100 coins</p>
    </div>
  </div>
);

export default Header;
