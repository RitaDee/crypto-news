import React from 'react';
import { useSelector } from 'react-redux';
import CoinUi from './CoinUi';

const CoinList = () => {
  const coins = useSelector((store) => store.coins.list);
};

return (
  <div className='coinDiv'>
    <div className='conHeading'>
      <h2>Crypto Market Prices</h2>
    </div>
    <div>
      {coins.map((coins) => (
        <CoinUi
        id={coins.id}
        key={coins.id}
        name={coins.name}
        image={coins.image}
        currentPrice={coins.current_price}
        />
      ))
      }
    </div>
  </div>
  )

export default CoinList;
