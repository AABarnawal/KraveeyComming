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
          <source src='https://videos.pexels.com/video-files/854216/854216-hd_1920_1080_25fps.mp4' type='video/mp4' />
        </video>
        <h1 className='txt' >Coming Soon</h1>
        <div className='para'>
          <h2>Deliciousness Delivered Soon!</h2></div>
        <div className='com' >
        <SocialIcons />
        <p className="contact-email">write us at: <a href='mailto:support@kraveey.com' >support@kraveey.com</a></p>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
