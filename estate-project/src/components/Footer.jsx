import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-logo" onClick={scrollToTop}>
            Luxe<span>Estate</span>
          </h3>
          <p className="footer-about">
            Transforming real estate experiences with innovation, integrity, and exceptional service.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Property Sales</a></li>
            <li><a href="#">Property Management</a></li>
            <li><a href="#">Valuation Services</a></li>
            <li><a href="#">Investment Consulting</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest property updates.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LuxeEstate. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;