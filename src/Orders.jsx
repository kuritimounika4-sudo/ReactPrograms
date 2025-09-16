import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Orders() {

  // Reading the orders from the store
  let orders = useSelector(globalState => globalState.orders) || [];

  // Dispatch function to dispatch actions to store
  let dispatch = useDispatch();


  // Formatting the orders data for display
    let finalData = orders.map((purchase,index) => (
    <li key = {index}>
       <p>Date : {purchase.date}</p>
      <p>Total Price : ₹{purchase.totalPrice}</p>
      <ul>
        {purchase.items.map((item,itemindex) => (
          <li key={itemindex}>
            {item.imageUrl && (
        <img
           src={item.imageUrl}
             alt={item.name}
             style={{ width: '80px', height: '80px', objectFit: 'contain' }}
               />
           )}
                  {item.name} - ₹{item.price} * {item.quantity}
          </li>
        ))}
      </ul>
    </li>
  ));
  

  return (
  <>
    <h1>Orders History</h1>
    <ul>{finalData}</ul>
   {orders.length === 0 && <p>No orders found.</p>}
 </>  
  );
}
export default Orders;