import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './social.css';

const Social = () => {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
      <a href="mailto:info@example.com"><i class="fas fa-envelope"></i></a>

      <div>
        <FontAwesomeIcon icon={['fab', 'facebook']} />
        <FontAwesomeIcon icon={['fab', 'instagram']} />
        <FontAwesomeIcon icon={['fab', 'twitter']} /> 
      </div>
    </div>
  );
};

export default Social;