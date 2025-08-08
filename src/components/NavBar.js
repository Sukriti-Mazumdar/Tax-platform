import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span className="tax-text">TAX</span>
          <div className="underline"></div>
        </div>
        <ul className="nav-links">
          <li className="nav-item active">Home</li>
          <li className="nav-item">Company</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </div>
      <div className="navbar-right">
        <span className="login-text">login</span>
        <button className="btn consultation-btn">Book a free consultation</button>
      </div>
    </nav>
  );
};

export default NavBar;
