import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addToCart } from './Store';
import "./Milk.css"; // <-- external CSS

function Milk() {
  let milkList = useSelector((state) => state.products.Milk);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(milkList.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  milkList = milkList.slice(startIndex, endIndex);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="milk-container">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      <h2 className="milk-title">🥛 Milk Items </h2>

      <div className="milk-grid">
        {milkList.map((milk) => (
          <div key={milk.id} className="milk-card">
            <img src={milk.imageUrl} alt={milk.name} className="milk-img" />
            <div className="milk-body">
              <h3 className="milk-name">{milk.name}</h3>
              <p className="milk-desc">{milk.description}</p>
              <p className="milk-price">₹{milk.price}</p>
              <button
                className="milk-btn"
                onClick={() => handleAddToCart(milk)}
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
      {/* 🥛 Get in Touch Section */}
<section className="milk-contact">
  <h2>Get in Touch</h2>
  <p>We’d love to serve you the freshest dairy delights!</p>

  <div className="milk-contact-cards">
    <div className="milk-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-phone"></i>
      </div>
      <p>+91 98765 43210</p>
    </div>

    <div className="milk-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-envelope"></i>
      </div>
      <p>tastysecrets@gmail.com</p>
    </div>

    <div className="milk-contact-card">
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

export default Milk;
