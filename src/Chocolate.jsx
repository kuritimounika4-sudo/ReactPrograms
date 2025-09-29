import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { toast, ToastContainer } from "react-toastify";

import "./Chocolate.css"; // 🎨 External CSS

function Chocolate() {
  let chocolateList = useSelector((state) => state.ps.Chocolates);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
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
    </div>
  );
}

export default Chocolate;
