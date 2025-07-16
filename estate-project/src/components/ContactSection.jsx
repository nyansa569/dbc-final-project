import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p className="contact-description">
            Need help finding your dream home or have questions about property
            in Ghana? Contact us today - we're happy to help!
          </p>
          <div className="contact-details">
            <div className="detail-item">
              <div className="detail-icon">📍</div>
              <div>
                <h3>Our Offices</h3>
                <p>
                  1 Liberation Road, 5th Floor
                  <br />
                  Accra Digital Centre
                  <br />
                  Accra, Ghana
                </p>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>
                  +233 30 123 4567 (Office)
                  <br />
                  +233 55 987 6543 (Mobile)
                </p>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon">✉️</div>
              <div>
                <h3>Email Us</h3>
                <p>
                  hello@ghanaproperties.com
                  <br />
                  sales@ghanaproperties.com
                </p>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon">🕒</div>
              <div>
                <h3>Working Hours</h3>
                <p>
                  Monday-Friday: 8:30AM - 5:30PM
                  <br />
                  Saturday: 9:00AM - 2:00PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
