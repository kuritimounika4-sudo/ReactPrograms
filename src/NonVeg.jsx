import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { toast, ToastContainer } from "react-toastify";
import "./NonVeg.css"; // <-- external CSS

function NonVeg() {
  let nonVegList = useSelector((state) => state.ps.NonVeg);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(nonVegList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  nonVegList = nonVegList.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! 🍗`);
  };

  return (
    <div className="nonveg-container">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      <h2 className="nonveg-title">🍗 Non-Veg Items </h2>

      <div className="nonveg-grid">
        {nonVegList.map((nonveg) => (
          <div key={nonveg.id} className="nonveg-card">
            <img src={nonveg.imageUrl} alt={nonveg.name} className="nonveg-img" />
            <div className="nonveg-body">
              <h3 className="nonveg-name">{nonveg.name}</h3>
              <p className="nonveg-desc">{nonveg.description}</p>
              <p className="nonveg-price">₹{nonveg.price}</p>
              <button
                className="nonveg-btn"
                onClick={() => handleAddToCart(nonveg)}
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
              className={`page-btn ${currentPage === pageNumber ? "active" : ""}`}
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

export default NonVeg;
