import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Store';
import { toast, ToastContainer } from 'react-toastify';

function Chocolate() {
    
      //Reading the chocolate items from the store
     let chocolateList =  useSelector(globalState=>globalState.ps.Chocolates);

     //Dispatch function to dispatch actions to  store
     let dispatch = useDispatch();

     //State for current page in pagination
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 8;
      const totalPages = Math.ceil(chocolateList.length / itemsPerPage);

      // Calculate the index range for the current page
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      // Get the items for the current page
      chocolateList = chocolateList.slice(indexOfFirstItem, indexOfLastItem);

      
      // ✅ handle add to cart + toast
        const handleAddToCart = (product) => {
          dispatch(addToCart(product));
          toast.success(`${product.name} added to cart! 🛒`); // 🎉 Success message
        };

  return (
     <div className="container my-4">
       <ToastContainer position='top-right' autoClose={2000} theme="colored" />
      <div className="row mt-4">
           <p>This is chocolates in  BigBasket final</p>
        {chocolateList.map(chocolate => (
          <div key={chocolate.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            
            <div className="card h-100">
              <img
                src={chocolate.imageUrl}
                className="card-img-top img-fluid object-fit-contain"
                alt={chocolate.name}
                style={{ height: '190px' }} 
              />
              <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center text-primary">{chocolate.name}</h5>
                <p className="card-text ">{chocolate.description}</p>
                <p className="card-text text-center"><strong className='text-danger'>₹{chocolate.price}</strong></p>
                <button className="btn btn-primary mt-auto" onClick={() => {dispatch(addToCart(chocolate));toast.success(`${chocolate.name}  added to cart successfully`)}}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center my-3">
        <button onClick={()=>setCurrentPage(currentPage-1)}disabled={currentPage===1}>Previous</button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (  
        <button
          key={pageNumber}    
          onClick={() => setCurrentPage(pageNumber)}
          disabled={currentPage === pageNumber}
          className={`btn btn-sm mx-1 ${currentPage === pageNumber ? 'btn-primary' : 'btn-outline-primary'}`}
        >
          {pageNumber}
        </button>
      ))}
        <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
      </div>
     </div>
  );
}
export default Chocolate;