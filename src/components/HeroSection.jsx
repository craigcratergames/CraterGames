import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../HeroSection.css';
import gameDescription from '../assets/NewsFeedText/News1';
import comicDescription from '../assets/NewsFeedText/News2';

const HeroSection = () => {
  const settings = {
    dots: true, // Enable dot navigation
    infinite: true, // Infinite looping
    speed: 1000, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: false, // Automatically scroll through slides
    autoplaySpeed: 5000, // Speed of autoplay in ms
  };

  return (
    <div className="hero-container">
      <Slider {...settings}>
        <div className="news-item">
          <h2>Death Comes the Board Game</h2>
          <p>{gameDescription}</p>
        </div>
        <div className="news-item">
          <h2>Death Comes: The Prologue</h2>
          <p>{comicDescription}</p>
        </div>
        <div className="news-item">
          <h2>Coming Soon</h2>
          <p>More news coming soon</p>
        </div>
        {/* Add more news items as needed */}
      </Slider>
    </div>
  );
};

export default HeroSection;
