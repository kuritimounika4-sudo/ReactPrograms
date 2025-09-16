import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Store';
import { toast, ToastContainer } from 'react-toastify';

function Milk()
 {

  //Reading the milk items from the store
  let milkList =  useSelector(globalState=>globalState.ps.Milk);

  //Dispatch function to dispatch actions to  store
  let dispatch = useDispatch();

  //State for current page in pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(milkList.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  milkList = milkList.slice(startIndex, endIndex);

  // ✅ handle add to cart + toast
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      toast.success(`${product.name} added to cart! 🛒`); // 🎉 Success message
    };
  
  
 return (
      <div className="container my-4">  
      <ToastContainer position='top-right' autoClose={2000} theme="colored" />
      <div className="row mt-4">
           <p>This is milk items  in  BigBasket final</p>
        {milkList.map(milk => (
          <div key={milk.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            
            <div className="card h-100">
              <img
                src={milk.imageUrl}
                className="card-img-top img-fluid object-fit-contain"
                alt={milk.name}
                style={{ height: '190px' }} 
              />
              <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center text-primary">{milk.name}</h5>
                <p className="card-text ">{milk.description}</p>
                <p className="card-text text-center"><strong className='text-danger'>₹{milk.price}</strong></p>
                <button className="btn btn-dark mt-auto" onClick={() =>{dispatch(addToCart(milk));toast.success(`${milk.name}  added to cart successfully`)}}>Add To Cart</button>
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
        <button onClick={()=>setCurrentPage(currentPage+1)}disabled={currentPage===totalPages}>Next</button>
      </div>  
    </div>
     );
   }

export default Milk;

   

  