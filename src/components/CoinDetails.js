import React from 'react';
import { useSelector } from 'react-redux';
import coinsDetailsUi from './CoinDetailsUi';

const CoinDetails = () => {
  const coins = useSelector((store) => store.coinDetails.list);
  return (
    <div className="coinDiv">
      <div className="coinHeading">
        <h1>Crypto Market Prices</h1>
      </div>
      <div className="coinsDetails">
        <coinsDetailsUi
          currentPrice={coins.market_data.current_price.usd}
          Alltimehigh={coins.market_data.ath.usd}
          Alltimelow={coins.market_data.atl.usd}
          fullyDilutedValuation={coins.market_data.fully_diluted_valuation.usd}
          marketCap={coins.market_data.market_cap.usd}
          totalVolume={coins.market_data.total_volume}
          priceChangePerDay={coins.market_data.price_change_24h.usd}
        />
      </div>
    </div>
  );
};

export default CoinDetails;
