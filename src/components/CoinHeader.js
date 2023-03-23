import React from 'react';
import { useSelector } from 'react-redux';

const CoinHeader = () => {
  const coinsDetails = useSelector((store) => store.coinsDetails.list);
  return (
    <div className="coinHeader">
      <img alt="cryptocurrencies" src={coinsDetails.image.large} />
      <div>
        <h1>{coinsDetails.name}</h1>
        <p>{coinsDetails.market_data.current_price.usd}</p>
        $
      </div>
    </div>
  );
};

export default CoinHeader;
