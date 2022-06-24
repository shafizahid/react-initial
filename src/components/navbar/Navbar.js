import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking App</span>{' '}
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
