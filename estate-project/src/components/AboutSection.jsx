import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="image-frame"></div>
          <div className="image-overlay"></div>
        </div>
        <div className="about-content">
          <h2 className="section-title">
            <span>About</span> Our Company
          </h2>
          <p className="about-description">
            Founded in 2010, LuxeEstate has been transforming the real estate industry with innovative solutions and exceptional service. Our team of dedicated professionals brings decades of combined experience to help you find the perfect property.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <h3>Award Winning</h3>
              <p>Recognized as the best real estate agency for 5 consecutive years</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔑</div>
              <h3>Trusted</h3>
              <p>Over 10,000 satisfied clients and counting</p>
            </div>
          </div>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;