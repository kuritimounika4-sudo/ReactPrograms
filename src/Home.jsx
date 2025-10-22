import React, { useEffect } from "react";
import "./Home.css";
import Aos from "aos";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1> Where <span>Every</span> Meal Feels Like <span>Home</span></h1>
          <p>  Serving delicious homemade-style meals for your loved ones with a touch of warmth and care. </p>
                <button className="explore-btn">Explore Menu</button>
        </div>
        <div className="hero-image">  <img src="/images.jsx/homepage.jpg" alt="Delicious food" /> </div>
      </section>

      {/* Special Dishes */}
      <section className="special-dishes">
        <h2>Our Special Dishes</h2>
        <div className="dish-cards">
          {[
            { img: "/images.jsx/chickenbir.jpg", name: "Chicken Biryani", price: 600 },
            { img:"/images.jsx/mutton seekh kebab.jpg ", name:"Mutton kabeb ", price:800.0},
            { img: "/images.jsx/Grilled Chicken.jpg", name: "Grilled Chicken", price: 750 },
            { img: "/images.jsx/roasted chicken.jpg", name: "Roasted Chicken", price: 700 },
            { img: "/images.jsx/muttonbiryani.jpg", name: "Mutton Biryani", price: 1000 }
            

          ].map((dish, index) => (
            <div className="dish-card" key={index}>
              <img src={dish.img} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>₹{dish.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 data-aos="fade-up">Why Choose Us</h2>

        <div className="choose-us-cards">
              <div className="choose-card" data-aos="fade-up" data-aos-delay="100">
               <img src="https://cdn-icons-png.flaticon.com/512/706/706164.png" alt="Fresh Ingredients" />
               <h3>Fresh Ingredients</h3>  <p>We use farm-fresh vegetables and premium ingredients to make every dish flavorful and healthy.</p>
             </div>

             <div className="choose-card" data-aos="fade-up" data-aos-delay="200">
              <img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="Authentic Taste" />
              <h3>Authentic Taste</h3><p>Our expert chefs bring traditional recipes to life with the perfect blend of taste and aroma.</p>
             </div>

            <div className="choose-card" data-aos="fade-up" data-aos-delay="300">
              <img src="https://cdn-icons-png.flaticon.com/512/4814/4814268.png" alt="Fast Delivery" />
              <h3>Fast & Safe Delivery</h3>  <p>Get your favorite meals delivered hot and fresh to your doorstep — on time, every time.</p>
             </div>

            <div className="choose-card" data-aos="fade-up" data-aos-delay="400">
              <img src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png" alt="Hygiene First" />
              <h3>Hygiene First</h3> <p>We follow strict hygiene standards from kitchen to packaging for your safety and trust.</p>
            </div>

            <div className="choose-card" data-aos="fade-up" data-aos-delay="500">
              <img src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png" alt="Affordable Prices" />
              <h3>Affordable Prices</h3> <p>Restaurant-quality meals at pocket-friendly prices — because good food should be for everyone.</p>
            </div>

            <div className="choose-card" data-aos="fade-up" data-aos-delay="500">
              <img src="https://cdn-icons-png.flaticon.com/512/633/633759.png" alt="Customer Love" />
              <h3>Customer Love ❤️</h3> <p>We’re proud to serve thousands of happy customers who trust us for their daily meals.</p>
            </div>
        </div>
  </section>


      {/* About Us Section */}
      <section id="about" className="about-us">
        <h2>About Us</h2>
        <p>  At <strong>TastySecrets</strong>, we believe in bringing the warmth and comfort of home to every plate. Our recipes are crafted with love, passed down through generations, and made with fresh ingredients and authentic flavors.  </p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="review-cards">
          <div className="review-card">
            <p>  “Absolutely loved the biryani — flavors, aroma, everything was perfect!” </p>
            <span>— Aarthi</span>
          </div>
          <div className="review-card">
            <p>“Cozy atmosphere and delicious food. Feels like home.”</p>
            <span>— Rahul</span>
          </div>
           <div className="review-card">
            <p>"The weekly meal box saves me so much time. Everything arrives fresh and tastes homemade.”</p>
            <span>– Sarah </span>
             </div>
              <div className="review-card">
            <p>“I ordered the grilled chicken wrap on a whim — now it’s my favorite lunch.”</p>
            <span>– James </span>
          </div>
          <div className="review-card">
            <p>“The pasta bowl is pure comfort food! So flavorful, and the portion size is just right.”</p>
            <span>– Emily</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <span>
            © {new Date().getFullYear()} <b>TasteSecrets</b>. All Rights Reserved.
          </span>
        </div>
        <div className="footer-right">
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
