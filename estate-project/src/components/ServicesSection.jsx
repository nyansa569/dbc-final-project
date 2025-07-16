import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: "Property Sales",
      description: "Comprehensive services for buying and selling residential and commercial properties.",
      icon: "🏠"
    },
    {
      title: "Property Management",
      description: "Professional management services to maximize your investment returns.",
      icon: "📊"
    },
    {
      title: "Valuation Services",
      description: "Accurate property valuations by certified professionals.",
      icon: "💰"
    },
    {
      title: "Investment Consulting",
      description: "Expert advice to help you make informed real estate investment decisions.",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="section-title">
          Our <span>Services</span>
        </h2>
        <p className="section-subtitle">
          We offer a comprehensive range of real estate services to meet all your property needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;