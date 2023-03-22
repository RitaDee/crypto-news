import React from 'react';
import { useSelector } from 'react-redux';
import CoinUi from './CoinUi';

const CoinList = () => {
  const coins = useSelector((store) => store.coins.list);
  // const crypto = coins.name;
  // console.log(crypto);
  console.log(coins);

  return (
    <div className="coinDiv">
      <div className="conHeading">
        <h2>Crypto Market Prices</h2>
      </div>
      <div>
        {coins.map((coin) => (
          <CoinUi
            id={coins.coin.id}
            key={coins.coin.id}
            name={coins.coin.name}
            image={coins.coin.icon}
            currentPrice={coin.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CoinList;
