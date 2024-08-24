import React from 'react';
import '../HeroSection.css'; // Assuming you'll style it in a separate CSS file
import heroImage from '../assets/Under-Construction.png'; // Example: adjust the path as necessary

const HeroSection = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <div className="hero-content"></div>
      </div>
    </div>
  );
};

export default HeroSection;
