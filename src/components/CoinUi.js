import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi';
import { fetchCoinsDetail } from '../Redux/details/CoinsDetailsSlice';

const CoinUi = ({ image, id, currentPrice }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCoinsDetail(id));
  };

  return (
    <div className="CoinUi">
      <div>
        <NavLink to="/coindetail">
          <BiRightArrowCircle className="icon" onClick={handleClick} />
        </NavLink>
        <img alt="coin" src={image} />
        <h1>{id}</h1>
        <h1>
          {currentPrice}
          $
        </h1>
      </div>
    </div>
  );
};

CoinUi.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default CoinUi;
