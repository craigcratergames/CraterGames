import React from 'react';
import '../Comic.css'; // Style the comic pages

import page0 from '../assets/DeathComesPg0.png';
import page1 from '../assets/DeathComesPg1.png';

// Import additional pages as needed

const Comic = () => {
  const comicPages = [page0,page1,]; // Add all comic pages here

  return (
    <div className="comic-container">
      {comicPages.map((page, index) => (
        <img key={index} src={page} alt={`Comic Page ${index + 1}`} className="comic-page" />
      ))}
    </div>
  );
}

export default Comic;