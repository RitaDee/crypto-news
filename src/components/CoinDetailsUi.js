import React from 'react';
import PropTypes from 'prop-types';

const CoinDetailsUi = ({
  currentPrice,
  availableSupply,
  marketCap,
  priceChange1d,
  // marketCap,
  // totalVolume,
  // priceChangePerDay,
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
      <h1>Available Supply</h1>
      <div>
        <h1>{availableSupply}</h1>
      </div>
    </div>
    <div>
      <h1>Market Cap</h1>
      <div>
        <h1>{marketCap}</h1>
      </div>
      <div>
        <h1>Price Change Per Day</h1>
        <div>
          <h1>{priceChange1d}</h1>
        </div>
      </div>
    </div>

    {/*
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
    </div> */}
  </div>
);

CoinDetailsUi.propTypes = {
  currentPrice: PropTypes.number.isRequired,
  availableSupply: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  priceChange1d: PropTypes.number.isRequired,
  // marketCap: PropTypes.number.isRequired,
  // totalVolume: PropTypes.number.isRequired,
  // priceChangePerDay: PropTypes.number.isRequired,
};

export default CoinDetailsUi;
