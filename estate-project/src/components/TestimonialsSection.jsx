import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Buyer",
      content: "LuxeEstate made the home buying process seamless. Their attention to detail and understanding of my needs was exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Investor",
      content: "The investment consulting service helped me identify properties with the best ROI. Highly recommend their expertise.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Property Owner",
      content: "Their property management team has taken all the stress out of renting my apartments. Professional and reliable.",
      rating: 4
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">
          What Our <span>Clients</span> Say
        </h2>
        <div className="testimonial-slider">
          <button className="slider-arrow left" onClick={prevTestimonial}>&lt;</button>
          <div className="testimonial-content">
            <div className="testimonial-rating">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[currentTestimonial].content}"</p>
            <div className="testimonial-author">
              <h3>{testimonials[currentTestimonial].name}</h3>
              <p>{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
          <button className="slider-arrow right" onClick={nextTestimonial}>&gt;</button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;