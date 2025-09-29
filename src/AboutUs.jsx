import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Food Delivered to Your Door.</h1>
          <p>Join our Home Food Club and get your favorite blends delivered to you on your schedule.</p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us <span>Our Story</span></h2>
        <p>
          At <strong>Food Time</strong>,we believe good food brings people together. From fresh, locally-sourced ingredients to time-honored recipes, every dish is crafted to delight your taste buds.
        </p>
        <p>
          Our mission is simple: Whether you're dining in or ordering out — we’re here to serve comfort, flavor, and happiness on every plate.
          “Flavors that Feel Like Home.”

“Where Every Bite Tells a Story.”

“Real Ingredients. Real Taste.”
          </p>
        <p><em>  TastySecrets Team…</em></p>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <h3>Why Choose Us?</h3>
        <div className="why-cards">
          <div className="why-card">
            <img src="public/images.jsx/leaf.jpg" alt="Sustainably Sourced" />
            <h4>Sustainably Sourced</h4>
            <p>We partner with local farmers and trusted suppliers who use ethical and eco-friendly practices.</p>
          </div>
          <div className="why-card">
            <img src="public/images.jsx/fire.jpg" alt="Freshly Roasted" />
            <h4>Freshly Roasted</h4>
            <p>Our ingredients are roasted in small batches to lock in rich flavors and served fresh every time for the perfect taste experience..</p>
          </div>
          <div className="why-card">
            <img src="public/images.jsx/pot.jpg" alt="Expertly Crafted" />
            <h4>Expertly Crafted</h4>
            <p>Each dish is thoughtfully prepared by skilled chefs using time-tested techniques and quality ingredients.</p>
          </div>
        </div>
      </section>
            {/* Testimonials Section */}
      <section className="testimonials-section">
        <h3>What Our Customer Says</h3>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>“The pasta bowl is pure comfort food! So flavorful, and the portion size is just right.”</p>
            <span>– Emily R.</span>
          </div>
          <div className="testimonial-card">
            <p>“I ordered the grilled chicken wrap on a whim — now it’s my favorite lunch. Fresh, juicy, and packed with flavor.”</p>
            <span>– James T.</span>
          </div>
          <div className="testimonial-card">
            <p>"The weekly meal box saves me so much time. Everything arrives fresh and tastes homemade.”</p>
            <span>– Sarah M.</span>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h3>Read Our <span>Latest Blog</span></h3>
        <div className="blog-cards">
          <div className="blog-card">
            <img src="public/images.jsx/heaven.jpg" alt="food heaven" />
            <h4>🍴 Foodie Haven</h4>
            <p>Discover recipes, cooking tips, and mouth-watering stories for passionate food lovers..</p>
          </div>
          <div className="blog-card">
            <img src="public/images.jsx/fresh.jpg" alt="fresh ingrediants" />
            <h4>🍅 Fresh Ingredients</h4>
            <p>Get expert insights into seasonal produce, sourcing tips, and how to choose the best quality ingredients.</p>
          </div>
          <div className="blog-card">
            <img src="public/images.jsx/cooking.jpg" alt="cooking tips" />
            <h4>🍳 Cooking Tips</h4>
            <p>Learn how to cook like a pro with our step-by-step guides, kitchen hacks, and recipe reviews..</p>
          </div>
        </div>
      </section>
            {/* Contact Us Section */}
      <section className="contact-us-section">
        <p className="contact-info">
          Email: <a href="mailto:support@homeoftastetime.com">support@homeoftastetime.com</a> | Phone: 1-800-123-4567 | Location: 123  Street, Chintal, HYd
        </p>
      </section>



    </div>
  );
};

export default AboutUs;
