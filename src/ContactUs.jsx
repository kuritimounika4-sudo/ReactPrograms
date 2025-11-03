import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaStore } from "react-icons/fa";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hello, feel free to reach out.
        </p>
    
      </section>

      {/* Contact Info + Form */}
      <section className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <FaPhoneAlt className="icon" />
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-card">
            <FaWhatsapp className="icon" />
            <h3>WhatsApp</h3>
            <p>+91 98765 12345</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>tastysecrets@gmail.com</p>
          </div>

          <div className="info-card">
            <FaStore className="icon" />
            <h3>Our Shop</h3>
            <p>123 Food Street,Hyderabad</p>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Now</button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086544043464!2d144.9556514153197!3d-37.8172099797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577da63b7a70e3f!2sVictoria%20Market!5e0!3m2!1sen!2sin!4v1694680493043!5m2!1sen!2sin"
          width="50%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="footer-about">
          <h3>TastySecrets</h3>
          <p>
            Bringing the warmth and comfort of home to every plate. Freshly made
            with love and authentic flavors.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p>123 Food Street,Hyderabad</p>
          <p>+91 98765 43210</p>
          <p>tastysecrets@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
