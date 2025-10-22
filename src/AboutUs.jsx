
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Food Delivered to Your Door</h1>
          <p>
            Join our Home Food Club and get your favorite dishes delivered
            right to your doorstep on your schedule.
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>
          About Us <span>Our Story</span>
        </h2>
        <p>
          At <strong>Food Time</strong>, we believe good food brings people
          together. From fresh, locally sourced ingredients to time-honored
          recipes, every dish is crafted to delight your taste buds.
        </p>
        <p>
          Our mission is simple: Whether you're dining in or ordering out —
          we’re here to serve comfort, flavor, and happiness on every plate.
        </p>
        <ul className="motto-list">
          <li>“Flavors that Feel Like Home.”</li>
          <li>“Where Every Bite Tells a Story.”</li>
          <li>“Real Ingredients. Real Taste.”</li>
        </ul>
        <p>
          <em>— The TastySecrets Team</em>
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <h3>Why Choose Us?</h3>
        <div className="why-cards">
          <div className="why-card">
             <img src="/images.jsx/leaf.jpg" alt="Sustainably Sourced" />
            <h4>Sustainably Sourced</h4>
            <p>
              We partner with local farmers and trusted suppliers who use
              ethical and eco-friendly practices.
            </p>
          </div>
          <div className="why-card">
            <img src="/images.jsx/fire.jpg" alt="Freshly Roasted" />
            <h4>Freshly Roasted</h4>
            <p>
              Our ingredients are roasted in small batches to lock in rich
              flavors and served fresh every time.
            </p>
          </div>
          <div className="why-card">
                   <img src="/images.jsx/pot.jpg" alt="Expertly Crafted" />
            <h4>Expertly Crafted</h4>
            <p>
              Each dish is thoughtfully prepared by skilled chefs using
              time-tested techniques and premium ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h3>
          Read Our <span>Latest Blog</span>
        </h3>
        <div className="blog-cards">
          <div className="blog-card">
            <h4>🍴 Foodie Haven</h4>
            <p>
              Discover recipes, cooking tips, and mouth-watering stories for
              passionate food lovers.
            </p>
          </div>
          <div className="blog-card">
            <h4>🍅 Fresh Ingredients</h4>
            <p>
              Get expert insights into seasonal produce and how to choose the
              best quality ingredients.
            </p>
          </div>
          <div className="blog-card">
            <h4>🍳 Cooking Tips</h4>
            <p>
              Learn how to cook like a pro with our step-by-step guides, kitchen
              hacks, and recipe reviews.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <p className="contact-info">
          Email:{' '}
          <a href="mailto:support@homeoftastetime.com">
            support@homeoftastetime.com
          </a>{' '}
          | Phone: 1-800-123-4567 | Location: 123 Street, Chintal, Hyderabad
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

 