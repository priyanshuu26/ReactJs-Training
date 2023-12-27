/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="nav-a">
          Products
        </Link>
        <Link to="/cart" className="nav-b">
          Cart
        </Link>
      </div>
      <h2>Redux Shopping Cart</h2>
    </nav>
  );
}

export default Navbar;
