// src/components/HomePage.js
import React from 'react';
import '../styles.css';
import SocialIcons from './SocialIcons';
import './HomePage.css'
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="banner">
        <video className='vid' autoPlay muted loop>
          <source src='https://videos.pexels.com/video-files/853865/853865-hd_1280_720_25fps.mp4' type='video/mp4' />
        </video>
        <h1 className='txt' >Coming Soon</h1>
        <div className='com' >
        <SocialIcons />
        <p className="contact-email">Contact us at: contact@fooddelivery.com</p>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
