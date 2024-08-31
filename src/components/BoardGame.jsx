import React from 'react';
import '../BoardGame.css';

import page0 from '../assets/Engineer.png';
import page1 from '../assets/Farmer.png';
import page2 from '../assets/Guard.png';
import page3 from '../assets/Medic.png';
import page4 from '../assets/Policeman.png';
import page5 from '../assets/Scout.png';

// Example descriptions for each player card
const descriptions = [
  "The Engineer: Skilled in building and repairs, essential for maintaining your stronghold.",
  "The Farmer: Keeps your team fed with sustainable food production.",
  "The Guard: Protects your base from any incoming threats with expertise.",
  "The Medic: Heals wounds and keeps everyone in fighting shape.",
  "The Policeman: Protects your base from incoming threats with expertise.",
  "The Scout: Explores and gathers intelligence about your surroundings.",
];

const BoardGame = () => {
  const boardPages = [page0, page1, page2, page3, page4, page5];

  return (
    <div className="background" >
    <div className="board-container">
      {boardPages.map((page, index) => (
        <div className="board-item" key={index}>
          <img src={page} alt={`Board Game Page ${index + 1}`} className="board-page" />
          <div className="board-description">{descriptions[index]}</div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default BoardGame;
