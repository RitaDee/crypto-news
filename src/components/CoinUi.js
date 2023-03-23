import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi';
import { fetchCoinsDetail } from '../Redux/details/CoinsDetailsSlice';
import '../styles/CoinUi.css';

const CoinUi = ({ image, id, currentPrice }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCoinsDetail(id));
  };

  return (
    <div className="coindiv">
      <div className="coin">
        <NavLink to={`/coins/${id}`}>
          <BiRightArrowCircle className="icon" onClick={handleClick} />
        </NavLink>
        <img alt="coin" src={image} className="img" />
        <h1 className="name">{id}</h1>
        <h1 className="name">
          {currentPrice}
          $
        </h1>
      </div>
    </div>
  );
};

CoinUi.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default CoinUi;
