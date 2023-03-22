import React from 'react';
import PropTypes from 'prop-types';

const CoinDetailsUi = ({
  currentPrice,
  availableSupply,
  marketCap,
  priceChange1d,
  rank,
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
    <div>
      <h1>Rank</h1>
      <div>
        <h1>{rank}</h1>
      </div>
    </div>
  </div>
);

CoinDetailsUi.propTypes = {
  currentPrice: PropTypes.number.isRequired,
  availableSupply: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  priceChange1d: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};

export default CoinDetailsUi;
