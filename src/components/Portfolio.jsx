// Portfolio.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Portfolio.css';
import deathComesPage1 from '../assets/DeathComesFrontCover.png';
import boardGame from '../assets/DeathComesBoardGame.png';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Death Comes: The Board Game', image: boardGame, link: '/boardgame' },
    { id: 2, title: 'Death Comes: The Prologue', image: deathComesPage1, link: '/comic' },
    

  ];

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div className="portfolio-item" key={project.id}>
            <Link to={project.link}>
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
