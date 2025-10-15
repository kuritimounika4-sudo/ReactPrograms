import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Store';
import { toast, ToastContainer } from 'react-toastify';
import './Veg.css'; // <-- external CSS

function Veg() {
  let vegList = useSelector((state) => state.products.Veg);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(vegList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  vegList = vegList.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="veg-container">
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />

      <h2 className="veg-title">🥦 Veg Items </h2>

      <div className="veg-grid">
        {vegList.map((veg) => (
          <div key={veg.id} className="veg-card">
            <img src={veg.imageUrl} alt={veg.name} className="veg-img" />
            <div className="veg-body">
              <h3 className="veg-name">{veg.name}</h3>
              <p className="veg-desc">{veg.description}</p>
              <p className="veg-price">₹{veg.price}</p>
              <button
                className="veg-btn"
                onClick={() => handleAddToCart(veg)}
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
                currentPage === pageNumber ? 'active' : ''
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

export default Veg;
