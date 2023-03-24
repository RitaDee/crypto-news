import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import styles from '../styles/NavDetail.module.css';

const NavDetail = () => (
  <header>
    <NavLink to="/" className="icondiv">
      <MdArrowBackIos className={styles.icon2} />
    </NavLink>
    <span className={styles.span}>Crypto</span>
  </header>
);

export default NavDetail;
