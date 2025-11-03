import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { toast, ToastContainer } from "react-toastify";
import "./Drinks.css"; // 🎨 External CSS

function Drinks() {
  let drinksList = useSelector((state) => state.products.Drinks);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(drinksList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  drinksList = drinksList.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="drinks-container">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      <h2 className="drinks-title">🥤 Refreshing Drinks</h2>

      <div className="drinks-grid">
        {drinksList.map((drink) => (
          <div key={drink.id} className="drink-card">
            <img src={drink.imageUrl} alt={drink.name} className="drink-img" />
            <div className="drink-body">
              <h3 className="drink-name">{drink.name}</h3>
              <p className="drink-desc">{drink.description}</p>
              <p className="drink-price">₹{drink.price}</p>
              <button
                className="drink-btn"
                onClick={() => handleAddToCart(drink)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ⬅ Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={`page-btn ${
                currentPage === pageNumber ? "active" : ""
              }`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}

        <button
          className="page-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
      {/* 🍸 Get in Touch Section */}
<section className="drinks-contact">
  <h2>Get in Touch</h2>
  <p>We’d love to hear from you!</p>

  <div className="drinks-contact-cards">
    <div className="drinks-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-phone"></i>
      </div>
      <p>+91 98765 43210</p>
    </div>

    <div className="drinks-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-envelope"></i>
      </div>
      <p>tastysecrets@gmail.com</p>
    </div>

    <div className="drinks-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-location-dot"></i>
      </div>
      <p>123, Food Street, Hyderabad</p>
    </div>
  </div>
</section>

    </div>
  );
}

export default Drinks;
