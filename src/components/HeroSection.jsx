import React from 'react';
import { Link } from 'react-router-dom';
import '../HeroSection.css';
import gameImage from '../assets/DeathComesBoardGame.png'; // Image for the first section
import comicImage from '../assets/DeathComesFrontCover.png'; // Image for the comic book section

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* First Hero Item */}
      <div className="hero-item full-screen">
        <div className="hero-content">
          <div className="hero-image" style={{ backgroundImage: `url(${gameImage})` }}></div>
          <div className="hero-text">
            <h2>Death Comes - The Board Game</h2>
            <Link to="/boardgame" className="read-more">
              Read More <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Hero Item */}
      <div className="hero-item full-screen">
        <div className="hero-content">
          <div className="hero-image" style={{ backgroundImage: `url(${comicImage})` }}></div>
          <div className="hero-text">
            <h2>Death Comes: The Prologue</h2>
            <Link to="/comic" className="read-more">
              Read More <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
