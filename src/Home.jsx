import React from "react";
import "./Home.css";

function Home()
 {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        
        <div className="hero-text">
          <h1> Where <span>Every</span> Meal Feels Like <span>Home</span></h1>
          <p> Serving delicious homemade-style meals for your loved ones. </p>
        </div>
        <div className="hero-image">
          <img  src="public/images.jsx/homepage.jpg"  alt="food"/>
        </div>
      </section>

      {/* Special Dishes */}
      <section className="special-dishes">
        <h2>Our Special Dishes</h2>
        <div className="dish-cards">
          <div className="dish-card">
            <img src="public/images.jsx/chickenbir.jpg" alt="biryani"/>
            <h3>Chicken Biryani</h3>
            <p>$600</p>
            <button>Add to Cart</button>
          </div>
          <div className="dish-card">
            <img src="public/images.jsx/Grilled Chicken.jpg" alt="grilled"/>
            <h3>Grilled Chicken</h3>
            <p>$750</p>
            <button>Add to Cart</button>
          </div>
          <div className="dish-card">
            <img src="public/images.jsx/roasted chicken.jpg" alt="roasted"/>
            <h3>Roasted Chicken</h3>
            <p>$700</p>
            <button>Add to Cart</button>
          </div>
          <div className="dish-card">
            <img src="public/images.jsx/muttonbiryani.jpg" alt="mutton biryani"/>
            <h3>Mutton Biryani</h3>
            <p>$1000</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
       {/* About Us Section */}
      <section id="about" className="about-us">
        <h2>About Us</h2>
        <p>
          we believe in bringing the warmth and comfort
          of home to every plate. Our recipes are crafted with love and passed
          down generations, using fresh ingredients and authentic flavours. Join
          us for a dining experience that feels like home.
        </p>
      </section>

      {/* Testimonials / Reviews Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="review-cards">
          <div className="review-card">
            <p>“Absolutely loved the biryani - flavors, aroma, everything was perfect!”</p>
            <span>— Aarthi</span>
          </div>
          <div className="review-card">
            <p>“Cozy atmosphere and delicious food. Feels like home.”</p>
            <span>— Rahul</span>
          </div>
        </div>
      </section>

      {/* Contact / Location Section */}
      <section id="contact" className="contact-info">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <div>
            <h3>Address</h3>
            <p>123, Food Street, Culinary City, India</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div>
            <h3>Opening Hours</h3>
            <p>Mon - Sun: 9:00 AM - 10:00 PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <span>© {new Date().getFullYear()} TastSecrets. All Rights Reserved.</span>
        </div>
        <div className="footer-right">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="http://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
      
    </div>
  );
}

export default Home;
