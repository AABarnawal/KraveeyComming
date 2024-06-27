// src/components/SocialIcons.js
import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles.css';

const SocialIcons = () => {
  return (
    <div className="social-media-container">
      <a className="social-media-icon" href="https://www.linkedin.com/company/kraveey" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a className="social-media-icon" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a className="social-media-icon" href="https://instagram.com/kraveey.in" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialIcons;
