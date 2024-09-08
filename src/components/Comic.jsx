import React, { useState } from 'react';
import '../Comic.css';

import page0 from '../assets/DeathComesFrontCover.png';
import page1 from '../assets/Death comes page 1-notext.png';

const Comic = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const comicPages = [page0, page1];

  const changePage = (direction) => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage((prevPage) => prevPage + direction);
      setIsFlipping(false);
    }, 1000);
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === comicPages.length - 1;

  return (
    <div className="comic-container">
      <h2>Death Comes: The Prologue</h2>
      <p>
        Join us on a journey of Love, Death, and Zombies.
        <br />
        Mostly just Death and Zombies.
      </p>

      <div className="comic-book">
        {/* Clickable areas on the left and right sides */}
        <div
          className="clickable-area left"
          onClick={() => !isFirstPage && changePage(-1)}
        ></div>

        <div className={`comic-page-container ${isFlipping ? 'flipping' : ''}`}>
          <img
            src={comicPages[currentPage]}
            alt={`Comic Page ${currentPage + 1}`}
            className="comic-page"
          />
        </div>

        <div
          className="clickable-area right"
          onClick={() => !isLastPage && changePage(1)}
        ></div>
      </div>
    </div>
  );
};

export default Comic;
