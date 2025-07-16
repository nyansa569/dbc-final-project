import React, { useState, useEffect } from 'react';
import './LaunchScreen.css';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';


const LaunchScreen = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="launch-screen">
      <Navbar isScrolled={isScrolled} />
      <HomeSection /> 
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LaunchScreen;