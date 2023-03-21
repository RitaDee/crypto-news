import React from 'react';
import PropTypes from 'prop-types';

const coinsDetailsUi = ({
  currentPrice,
  Alltimehigh,
  Alltimelow,
  fullyDilutedValuation,
  marketCap,
  totalVolume,
  priceChangePerDay,
}) => (
  <div className="coinD">
    <div>
      <h1>Current Price</h1>
      <div>
        <h1>
          {currentPrice}
          $
        </h1>
      </div>
    </div>
    <div>
      <h1>All Time high</h1>
      <div>
        <h1>{Alltimehigh}</h1>
      </div>
    </div>
    <div>
      <h1>All Time Low</h1>
      <div>
        <h1>{Alltimelow}</h1>
      </div>
    </div>
    <div>
      <h1>All Time Low</h1>
      <div>
        <h1>{fullyDilutedValuation}</h1>
      </div>
    </div>
    <div>
      <h1>Market Cap</h1>
      <div>
        <h1>{marketCap}</h1>
      </div>
    </div>
    <div>
      <h1>Total Volume</h1>
      <div>
        <h1>{totalVolume}</h1>
      </div>
    </div>
    <div>
      <h1>Price Change Per Day</h1>
    </div>
    <div>
      <h1>{priceChangePerDay}</h1>
    </div>
  </div>
);

coinsDetailsUi.PropTypes = {
  currentPrice: PropTypes.number.isRequired,
  Alltimehigh: PropTypes.number.isRequired,
  Alltimelow: PropTypes.number.isRequired,
  fullyDilutedValuation: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  totalVolume: PropTypes.number.isRequired,
  priceChangePerDay: PropTypes.number.isRequired,
};

export default coinsDetailsUi;
