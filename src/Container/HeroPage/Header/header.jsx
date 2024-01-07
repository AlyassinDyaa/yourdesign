import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

import logo from "../../../Assets/Images/Logo/logoTransparent.png"

const header = () => {
  return (
    <div className='container__header' id='home'>

      <div className='container__header-img'>
        <img src={logo} alt='YD-logo' placeholder='LOGO'/>
      </div>
      
      <h2 className="header__title">Where Every Design has a Story</h2>

      <button className='btn'> 
        <Link to="/store" style={{color: "white"}}>SHOP NOW</Link>
      </button>
    </div>
  )
}

export default header
