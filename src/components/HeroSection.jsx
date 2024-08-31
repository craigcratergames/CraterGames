import React from 'react';
import { Link } from 'react-router-dom';
import '../HeroSection.css';
import gameImage from '../assets/DeathComesBoardGame.png'; // Image for the first section
import comicImage from '../assets/DeathComesFrontCover.png'; // Image for the new comic book section

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-item full-screen">
        <div className="hero-content">
          <div className="hero-image" style={{ backgroundImage: `url(${gameImage})` }}></div>
          <div className="hero-text">
            <h2>Death Comes - The Board Game</h2>
            <p>Death Comes - The Board Game is our flagship board game that thrusts players into a relentless zombie apocalypse.</p>
            <Link to="/CraterGames/boardgame" className="read-more">Read More <span>&#8594;</span></Link>
          </div>
        </div>
      </div>
      <div className="hero-item full-screen">
        <div className="hero-content">
          <div className="hero-image" style={{ backgroundImage: `url(${comicImage})` }}></div>
          <div className="hero-text">
            <h2>Death Comes: The Prolouge</h2>
            <p>Death Comes: The Prolouge is our companion comic to our flagship board game.</p>
            <Link to="/CraterGames/comic" className="read-more">Read More <span>&#8594;</span></Link>
          </div>
        </div>
      </div>

      {/* Add more news items here as needed */}
      {/* Example: */}
      {/* <div className="hero-item">
        <div className="hero-content">
          <div className="hero-image" style={{ backgroundImage: `url(${anotherImage})` }}></div>
          <div className="hero-text">
            <h2>Another News Item Title</h2>
            <p>Short description of another news item.</p>
            <a href="/another-news-details" className="read-more">Read More <span>&#8594;</span></a>
          </div>
        </div>
      </div> */}
      
    </div>
  );
};

export default HeroSection;
