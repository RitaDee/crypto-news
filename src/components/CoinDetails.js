import React from 'react';
import { useSelector } from 'react-redux';
import CoinDetailsUi from './CoinDetailsUi';

const CoinDetails = () => {
  const coin = useSelector((store) => store.coinsDetails.list);
  return (
    <div className="coinDiv">
      <div className="coinHeading">
        <h1>Crypto Market Prices</h1>
      </div>
      <div className="coinsDetails">
        <CoinDetailsUi
          coinIcon={coin.symbol}
          currentPrice={coin.price}
          availableSupply={coin.availableSupply}
          marketCap={coin.marketCap}
          priceChange1d={coin.priceChange1d}
          rank={coin.rank}
        />
      </div>
    </div>
  );
};

export default CoinDetails;
