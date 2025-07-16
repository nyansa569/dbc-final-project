import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ isScrolled }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/launch">
            Luxe<span>Estate</span>
          </Link>
        </div>
        <div className="navbar-links">
          <button onClick={() => scrollToSection("home")}>
            <Link to="/launch">Home</Link>
          </button>
          <button onClick={() => scrollToSection("about")}>About Us</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("testimonials")}>
            Testimonials
          </button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <button onClick={() => scrollToSection("contact")}>
            <Link to="/news-feed">NewsFeed</Link>
          </button>
        </div>
        <div className="navbar-cta">
          <Link to="/auth">
            {" "}
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
