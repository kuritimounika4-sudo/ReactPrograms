import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { toast, ToastContainer } from "react-toastify";
import "./Fruits.css"; // <-- external CSS

function Fruits() {
  let fruitsList = useSelector((state) => state.products.Fruits);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(fruitsList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  fruitsList = fruitsList.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="fruits-container">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      <h2 className="fruits-title">🍎 Fresh Fruits </h2>

      <div className="fruits-grid">
        {fruitsList.map((fruit) => (
          <div key={fruit.id} className="fruits-card">
            <img src={fruit.imageUrl} alt={fruit.name} className="fruits-img" />
            <div className="fruits-body">
              <h3 className="fruits-name">{fruit.name}</h3>
              <p className="fruits-desc">{fruit.description}</p>
              <p className="fruits-price">₹{fruit.price}</p>
              <button
                className="fruits-btn"
                onClick={() => handleAddToCart(fruit)}
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
      {/* 🍓 Get in Touch Section */}
<section className="fruits-contact">
  <h2>Get in Touch</h2>
  <p>We’d love to bring you the freshest fruits every day!</p>

  <div className="fruits-contact-cards">
    <div className="fruits-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-phone"></i>
      </div>
      <p>+91 98765 43210</p>
    </div>

    <div className="fruits-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-envelope"></i>
      </div>
      <p>tastysecrets@gmail.com</p>
    </div>

    <div className="fruits-contact-card">
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

export default Fruits;
