import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Store';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';   

function Veg() {

 //Reading the veg items from the store
 let vegList =  useSelector(globalState=>globalState.ps.Veg);

//Dispatch function to dispatch actions to  store
 let dispatch = useDispatch();

//State for current page in pagination
   const [currentPage, setCurrentPage] = React.useState(1);
   const itemsPerPage = 8;
    const totalPages = Math.ceil(vegList.length / itemsPerPage);

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Get the items for the current page
    vegList = vegList.slice(indexOfFirstItem, indexOfLastItem); 

     // ✅ handle add to cart + toast
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! 🛒`); // 🎉 Success message
  };



  return (
    
    <div className="container my-4">
       <ToastContainer position='top-right' autoClose={2000} theme="colored" />
      <div className="row mt-4">
           <p> Veg items in  Home of Taste</p>
              {vegList.map(veg => (
          <div key={veg.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
              <img
                src={veg.imageUrl}
                className="card-img-top img-fluid object-fit-contain"
                alt={veg.name}
                style={{ height: '190px' }} 
              />
              <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center text-primary">{veg.name}</h5>
                <p className="card-text ">{veg.description}</p>
                <p className="card-text text-center"><strong className='text-danger'>₹{veg.price}</strong></p>
                <button  className="btn btn-info mt-auto" type="button" onClick={()=>{dispatch(addToCart(veg));
                  toast.success(`${veg.name} added to cart successfully`)}}>Add To Cart</button>
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
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  
     </div>

  );
}

export default Veg;

