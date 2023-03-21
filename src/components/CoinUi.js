import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCoinsDetail } from '../Redux/details/CoinsDetailsSlice';

const CoinUi = ({ picture, id, currentPrice }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCoinsDetail(id));
  };

  return (
    <div className="CoinUi">
        <div>
            <NavLink to="/coindetail">
                <img alt="coin" src="picture" />
                <h1>{id}</h1>
                
            </NavLink>
        </div>
    </div>
  );
};

CoinUi.propTypes = {
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default CoinUi;
