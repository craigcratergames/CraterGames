// Portfolio.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Portfolio.css';
import deathComesPage1 from '../assets/DeathComesFrontCover.png';
import boardGame from '../assets/DeathComesBoardGame.png';
import itchLogo from '../assets/ItchIoLogo.png';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Death Comes: The Board Game', image: boardGame, link: '/boardgame' },
    { id: 2, title: 'Death Comes: The Prologue', image: deathComesPage1, link: '/comic' },
    { id: 3, title: 'Play Little Bot and Teddy on Itch.io', image: itchLogo, externalLink: 'https://craig-cratergames.itch.io/the-adventures-of-little-bot-and-teddy-the-prototype' },
  ];

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div className="portfolio-item" key={project.id}>
            {project.link ? (
              <Link to={project.link}>
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                </div>
              </Link>
            ) : (
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Portfolio;
