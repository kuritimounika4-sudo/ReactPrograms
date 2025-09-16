// src/components/ContactUs.jsx
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We're here to help you bake something great 🍞</p>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Info Boxes */}
          <div className="contact-info">
            <div className="info-card">
              <i className="fas fa-phone"></i>
              <h4>Phone</h4>
              <p>207-8767-452</p>
            </div>
            <div className="info-card">
              <i className="fab fa-whatsapp"></i>
              <h4>WhatsApp</h4>
              <p>082-123-234-345</p>
            </div>
            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <h4>Email</h4>
              <p>support@yoursite.com</p>
            </div>
            <div className="info-card">
              <i className="fas fa-store"></i>
              <h4>Our Shop</h4>
              <p>2443 Oak Ridge Omaha, QA 45065</p>
            </div>
            <div className="map-container">      
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1103727.246439812!2d77.44355534040339!3d17.381130056364242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1757610203269!5m2!1sen!2sin"
               width="600" 
               height="450" 
               allowfullscreen="" 
               loading="lazy" 
               >
               </iframe>
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form">
            <h2>Get In Touch</h2>
            <p>Let us know how we can help. Fill out the form and we’ll get back to you.</p>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h3><i className="fas fa-bread-slice"></i> Bread Tale</h3>
            <p>We rise by lifting others. Freshly baked support, every day.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <p>2443 Oak Ridge Omaha, QA</p>
            <p>207-8767-452</p>
            <p>support@yoursite.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Bread Tale | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
