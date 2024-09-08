import React from 'react';
import '../Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contacts-container">
      <h2>Contact Us</h2>
      <p>You can reach us via email or connect with us on social media:</p>

      <div className="contact-info">
        {/* Email Links */}
        <a href="mailto:craig@cratergames.co.uk" className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} /> craig@cratergames.co.uk
        </a>
        <a href="mailto:peter@cratergames.co.uk" className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} /> peter@cratergames.co.uk
        </a>

        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://twitter.com/CraterGames9074" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557231326383" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/craig_cratergames/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.instagram.com/crater_games_studio/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href=" https://www.instagram.com/crater_comics/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
