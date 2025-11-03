import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Store';
import { toast, ToastContainer } from 'react-toastify';
import './Veg.css'; // <-- external CSS

function Veg() {
  let vegList = useSelector((state) => state.products.Veg);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;
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
      {/* 🌿 Get in Touch Section */}
<section className="veg-contact">
  <h2>Get in Touch</h2>
  <p>We’d love to hear from you!</p>

  <div className="veg-contact-cards">
    <div className="veg-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-phone"></i>
      </div>
      <p>+91 98765 43210</p>
    </div>

    <div className="veg-contact-card">
      <div className="icon-circle">
        <i className="fa-solid fa-envelope"></i>
      </div>
      <p>tastysecrets@gmail.com</p>
    </div>

    <div className="veg-contact-card">
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

export default Veg;
