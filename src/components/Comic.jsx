import React, { useState } from 'react';
import '../Comic.css'; // Style the comic pages

import page0 from '../assets/DeathComesFrontCover.png';
import page1 from '../assets/Death comes page 1-notext.png';


const Comic = () => {
  const comicPages = [page0, page1,];
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false); // Track flipping state

  const goToNextPage = () => {
    if (currentPage < comicPages.length - 1) {
      setIsFlipping(true); // Start flip animation
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false); // Reset flip animation after 1 second
      }, 1000);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true); // Start flip animation
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false); // Reset flip animation after 1 second
      }, 1000);
    }
  };

  return (
    <div className="comic-container">
      <h2>Death Comes: The Prologue</h2>
      <p>Join us on a journey of Love, Death and Zombies.</p>
      
      <div className="comic-book">
        <button onClick={goToPreviousPage} disabled={currentPage === 0} className="nav-button">
          &#8592; Previous
        </button>

        <div className={`comic-page-container ${isFlipping ? 'flipping' : ''}`}>
          <img
            src={comicPages[currentPage]}
            alt={`Comic Page ${currentPage + 1}`}
            className="comic-page"
          />
        </div>

        <button onClick={goToNextPage} disabled={currentPage === comicPages.length - 1} className="nav-button">
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default Comic;
