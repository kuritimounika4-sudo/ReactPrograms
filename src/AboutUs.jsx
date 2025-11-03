import React, { useEffect } from "react";
import "./AboutUs.css";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const teamMembers = [
    { img: "/images.jsx/chef1.jpg", name: "Chef Arjun", role: "Head Chef" },
    { img: "/images.jsx/chef2.jpg", name: "Chef Riya", role: "Pastry Expert" },
    { img: "/images.jsx/chef3.jpg", name: "Chef Dev", role: "Food Stylist" },
  ];

  const testimonials = [
    {
      img: "/images.jsx/user1.jpg",
      name: "Sneha Rao",
      review:
        "Absolutely love the flavors! Feels like homemade food every time I order.",
      rating: 5,
    },
    {
      img: "/images.jsx/user2.jpg",
      name: "Rahul Verma",
      review: "Best biryani I’ve ever had. Fresh, spicy, and perfectly balanced!",
      rating: 4,
    },
    {
      img: "/images.jsx/user3.jpg",
      name: "Anjali Mehta",
      review:
        "The desserts are to die for. TastySecrets is my go-to comfort food brand!",
      rating: 5,
    },
    {
      img: "/images.jsx/user4.jpg",
      name: "Kiran Das",
      review:
        "Super fast delivery and the food quality is always top-notch. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="about-us-page">
      {/* 🌟 Hero Section */}
      <section className="about-hero" data-aos="fade-down">
        <h1>
          About <span>TastySecrets</span>
        </h1>
        <p>
          Creating delicious memories — one plate at a time. Taste the love,
          passion, and creativity behind every dish.
        </p>
      </section>

     <section className="about-us-section">
  <div className="about-container">
    <div className="about-image" data-aos="fade-right">
      <img src="/images.jsx/ourfood.jpg" alt="About Our Food" />
    </div>

    <div className="about-content" data-aos="fade-left">
      <h2>Our Story</h2>
      <p>
        Welcome to <strong>TastySecrets</strong> — where every meal tells a story!
        We started as a small kitchen in Hyderabad with one dream: to
        bring homemade taste to every food lover. From our signature
        biryanis to our delightful desserts, we cook with heart and
        creativity.
      </p>
      <p>
        Every dish we serve celebrates India’s rich culinary culture
        blended with modern fusion. We source fresh ingredients from
        trusted local farms and prepare everything daily to ensure the
        perfect bite every time.
      </p>
      <button className="learn-more-btn">Explore Our Menu</button>
    </div>
  </div>
</section>


      {/* 🎯 Mission & Vision */}
      <section className="mission-vision" data-aos="fade-up">
        <h2>Our Mission & Vision</h2>
        <div className="mv-container">
          <div className="mv-card">
            <img src="/images.jsx/ourmission.jpg" alt="Mission" />
            <h4>Our Mission</h4>
            <p>
              To deliver happiness through great food and warm service-
              making every meal a memory.
            </p>
          </div>
          <div className="mv-card">
            <img src="/images.jsx/ourvision.jpg" alt="Vision" />
            <h4>Our Vision</h4>
            <p>
              To be India’s most loved home-style food brand, known for taste,
              trust, and innovation.
            </p>
          </div>
          <div className="mv-card">
            <img src="/images.jsx/ourvalues.jpg" alt="Values" />
            <h4>Our Values</h4>
            <p>
              Freshness, passion, sustainability, and a constant drive to bring
              joy to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* ❤️ Why People Love Us */}
      <section className="about-highlights" data-aos="fade-up">
        <h3>Why People Love Us</h3>
        <div className="highlight-cards">
          <div className="highlight-card">
                  <img src="https://cdn-icons-png.flaticon.com/512/706/706164.png" alt="Fresh Ingredients" />
            <h4>Always Fresh</h4>
            <p>We handpick ingredients daily for the best taste.</p>
          </div>
          <div className="highlight-card">
          <img src="https://cdn-icons-png.flaticon.com/512/4814/4814268.png" alt="Fast Delivery" />
            <h4>Fast Delivery</h4>
            <p>Hot and fresh meals at your doorstep in minutes.</p>
          </div>
          <div className="highlight-card">
  <img src="https://cdn-icons-png.flaticon.com/512/633/633759.png" alt="Customer Love" />
            <h4>Homemade Love</h4>
            <p>Cooked with care — just like your mom would.</p>
          </div>
           <div className="highlight-card">
           <img src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png" alt="Affordable Prices" />
              <h4>Affordable Prices</h4>
               <p>Restaurant-quality meals at pocket-friendly prices </p>
              </div>
        </div>
      </section>

      {/* 👨‍🍳 Meet Our Team */}
      <section className="team-section" data-aos="fade-up">
        <h2>Meet Our Chefs</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ Testimonials */}
      <section className="testimonials-section" data-aos="fade-up">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-slider">
          <div className="testimonials-track">
            {testimonials.concat(testimonials).map((t, i) => (
              <div key={i} className="testimonial-card">
                <img src={t.img} alt={t.name} className="testimonial-img" />
                <p className="testimonial-review">“{t.review}”</p>
                <div className="testimonial-rating">
                  {"⭐".repeat(t.rating)}
                </div>
                <span className="testimonial-name">– {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ✨ Get in Touch Section */}
<section className="contact-elegant" data-aos="fade-up">
  <h2>Get in Touch</h2>
  <p className="contact-tagline">We’d love to hear from you!</p>

  <div className="contact-columns">
    {/* Left side - Store info */}
    <div className="contact-left">
      <h3>TastySecrets Restaurant</h3>
      <p>
        Serving happiness with every bite! <br />
        Visit us for fresh, home-style meals made with love.
      </p>
      <p className="contact-quote">“Good food, great memories.”</p>
    </div>

    {/* Right side - Contact info */}
    <div className="contact-right">
      <div>
        <i className="fas fa-phone-alt"></i>
        <span>+91 98765 43210</span>
      </div>
      <div>
        <i className="fas fa-envelope"></i>
        <span>tastysecrets@gmail.com</span>
      </div>
      <div>
        <i className="fas fa-map-marker-alt"></i>
        <span>123, Food Street, Hyderabad, India</span>
      </div>
      <div>
        <i className="fas fa-clock"></i>
        <span>Mon–Sun: 10 AM – 10 PM</span>
      </div>

      {/* 🌐 Social Media Links */}
      <div className="social-links">
        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
        <a href="http://instagram.com/?hl=en"><i className="fab fa-instagram"></i></a>
        <a href="https://x.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUs;
