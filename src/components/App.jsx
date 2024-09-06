import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Portfolio from './Portfolio';
import Comic from './Comic';
import BoardGame from './BoardGame';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer';


const App = () => {
  return (
    <Router basename="/CraterGames">
      <div className="App d-flex flex-column min-vh-100">
        <NavBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/comic" element={<Comic />} />
            <Route path="/boardgame" element={<BoardGame />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
