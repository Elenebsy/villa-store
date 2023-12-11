import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="contact-info">
        <span>Contact Us: <a href="mailto:example@email.com">example@email.com</a></span>
      </div>
      <div className="about-us">
        <span>About Us: This is a brief description about our company.</span>
      </div>
      <div className="social-media">
        <span>Follow Us:</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
