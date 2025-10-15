import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { toast, ToastContainer } from "react-toastify";
import "./Fruits.css"; // <-- external CSS

function Fruits() {
  let fruitsList = useSelector((state) => state.products.Fruits);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
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
    </div>
  );
}

export default Fruits;
