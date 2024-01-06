import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import the CSS file

const Nav = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">Your Logo</Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/store">Store</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Nav;
