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
          currentPrice={coin.price}
          availableSupply={coin.availableSupply}
          marketCap={coin.marketCap}
          // fullyDilutedValuation={coin.market_data.fully_diluted_valuation.usd}
          // marketCap={coin.market_data.market_cap.usd}
          // totalVolume={coin.market_data.total_volume}
          // priceChangePerDay={coin.market_data.price_change_24h.usd}
        />
      </div>
    </div>
  );
};

export default CoinDetails;
