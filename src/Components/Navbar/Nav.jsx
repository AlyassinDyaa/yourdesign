import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import the CSS file

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">Your Design</Link>
      <div className="hamburger-icon" onClick={toggleNav}>
        &#9776;
      </div>
      <div className={`navbar-links ${navOpen ? 'opened' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/store">Store</Link>
        <Link to="/services">Services</Link>
        {/* <Link to="/contact">Contact</Link> */}
      </div>
    </div>
  );
};

export default Nav;



