import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { toast, ToastContainer } from "react-toastify";
import "./Chocolate.css"; // 🎨 External CSS

function Chocolate() {
  let chocolateList = useSelector((state) => state.products.Chocolates);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(chocolateList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  chocolateList = chocolateList.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="choco-container">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      <h2 className="choco-title">🍫 Delicious Chocolates</h2>

      <div className="choco-grid">
        {chocolateList.map((choco) => (
          <div key={choco.id} className="choco-card">
            <img src={choco.imageUrl} alt={choco.name} className="choco-img" />
            <div className="choco-body">
              <h3 className="choco-name">{choco.name}</h3>
              <p className="choco-desc">{choco.description}</p>
              <p className="choco-price">₹{choco.price}</p>
              <button
                className="choco-btn"
                onClick={() => handleAddToCart(choco)}
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
      {/* 🍫 Get in Touch Section */}
<section className="choco-contact">
  <h2>Get in Touch</h2>
  <p>We’d love to share our sweetest treats with you!</p>

  <div className="choco-contact-cards">
    <div className="choco-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-phone"></i>
      </div>
      <p>+91 98765 43210</p>
    </div>

    <div className="choco-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-envelope"></i>
      </div>
      <p>tastysecrets@gmail.com</p>
    </div>

    <div className="choco-contact-card">
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

export default Chocolate;
