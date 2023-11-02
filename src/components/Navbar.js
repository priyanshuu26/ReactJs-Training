import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/" style={{ margin: '30px' }}>
        <b>Home</b>
      </Link>
      <Link to="/about">
        <b>About</b>
      </Link>
    </div>
  );
}

export default Navbar;
