import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FcSettings } from 'react-icons/fc';
import styles from '../styles/Navbar.module.css';
import Modal from './Modal';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={styles.icondiv}>
          {/* <img src={logo} alt="planet" className={styles.icon} /> */}
        </NavLink>
        <span className={styles.navspan}>RTCOIN</span>
        <nav>
          <ul className={styles.navItems}>
            <NavLink>
              <FcSettings
                className={styles.settingicon}
                onClick={() => setIsOpen(true)}
              />
            </NavLink>
          </ul>
        </nav>
      </header>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}

export default Navbar;
