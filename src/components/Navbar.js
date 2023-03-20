import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <h1>Crypto News</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
