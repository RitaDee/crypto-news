import React from 'react';
import { useSelector } from 'react-redux';
import CoinUi from './CoinUi';

const CoinList = () => {
  const coins = useSelector((store) => store.coins.list);

  return (
    <div className="coinDiv">
      <div className="conHeading">
        <h2>Crypto Market Prices</h2>
      </div>
      <div>
        {coins.map((coin) => (
          <CoinUi
            id={coin.id}
            key={coin.id}
            name={coin.name}
            image={coin.icon}
            currentPrice={coin.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CoinList;
