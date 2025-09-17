import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder, clearCart, removeFromCart, decreaseQuantity, increaseQuantity } from "./store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QRCode from "react-qr-code";
import confetti from "canvas-confetti";
import './Cart.css';   
import { getCouponDiscount } from "./discountUtils";

function Cart() {
  const cartItems = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [buttonDiscount, setButtonDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponResult, setCouponResult] = useState({ isValid: false, discountPercent: 0, discountAmount: 0 });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const buttonDiscountAmount = (totalPrice * buttonDiscount) / 100;
  const couponDiscountAmount = couponResult.discountAmount || 0;
  let finalPrice = totalPrice - buttonDiscountAmount - couponDiscountAmount;
  const taxAmount = finalPrice * 0.18;
  finalPrice += taxAmount + 50; // shipping ₹50

 const handleApplyCoupon = () => {
  const result = getCouponDiscount(couponCode, totalPrice);
  setCouponResult(result);

  if (result.isValid) {
    toast.warning("Coupon Code Apllied");
    }
  else {
    toast.warning("Invalid Coupon Code!");
  }
}


  const handleCompletePurchase = () => {
    if (!customerEmail) {
      toast.warning("⚠ Please enter your email");
      return;
    }
    if (!paymentMethod) {
      toast.warning("⚠ Please select a payment method");
      return;
    }
    if (cartItems.length === 0) {
      toast.info("🛒 Cart is empty");
      return;
    }

    const orderDetails = {
      date: new Date().toLocaleString(),
      items: cartItems,
      total: totalPrice.toFixed(2),
      discount: buttonDiscountAmount.toFixed(2),
      coupon: couponDiscountAmount.toFixed(2),
      tax: taxAmount.toFixed(2),
      shipping: 50,
      paymentMethod: paymentMethod,
      customerEmail
    };

    dispatch(addOrder(orderDetails));
    dispatch(clearCart());
    toast.success("🎉 Purchase completed! Order added.");
    navigate("/orders");
  };

  return (
    <div className="container my-5 cart-container">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="mb-4">🛒 Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <div className="alert alert-info">Your cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="card mb-3 cart-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.imageUrl} alt={item.name} className="img-fluid rounded-start cart-img" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          ₹{item.price} × {item.quantity} = <strong>₹{item.price * item.quantity}</strong> </p>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <div className="btn-group" role="group" aria-label="Quantity controls">
                          <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(decreaseQuantity(item))}>−</button>
                          <span className="btn btn-light">{item.quantity}</span>
                          <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(increaseQuantity(item))}>+</button>
                        </div>
                        <button type="button" className="btn btn-danger btn-sm ms-3" onClick={() => dispatch(removeFromCart(item))}> Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="col-lg-4">
          <div className="card summary-card p-4">
            <h3 className="mb-4">💳 Order Summary</h3>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span><span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Discount:</span><span>−₹{buttonDiscountAmount.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Coupon ({couponResult.discountPercent}%):</span><span>−₹{couponDiscountAmount.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Tax (18%):</span><span>₹{taxAmount.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping:</span><span>₹50</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Final Total:</span><span>₹{finalPrice.toFixed(2)}</span>
            </div>

            <hr />

            <h5>🎁 Quick Discounts</h5>
            <div className="mb-3">
              {[10, 20, 30].map((pct) => (
                <button  key={pct}   type="button"  className={`btn ${buttonDiscount === pct ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`} onClick={() => setButtonDiscount(pct)}>  {pct}%  </button>
              ))}
              <button type="button" className="btn btn-outline-secondary mb-2" onClick={() => setButtonDiscount(0)}>Reset</button>
            </div>

            <h5>🔑 Coupon</h5>
            <div className="input-group mb-3">
              <input  type="text"  className="form-control" value={couponCode} onChange={(e) => setCouponCode(e.target.value)}  placeholder="Enter coupon code" />
              <button className="btn btn-primary" type="button" onClick={handleApplyCoupon}>Apply Coupon</button>
            </div>

            <h5>💳 Payment Method</h5>
            <div className="d-grid gap-2 mb-3">
              <button type="button" className={`btn ${paymentMethod==="qr" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setPaymentMethod("qr")}>QR Code</button>
              <button type="button" className={`btn ${paymentMethod==="card" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setPaymentMethod("card")}>Card</button>
              <button type="button" className={`btn ${paymentMethod==="cod" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setPaymentMethod("cod")}>Cash on Delivery</button>
            </div>

            {paymentMethod === "qr" && (
              <div className="mb-3 qr-section text-center">
                <h6>Scan UPI QR to pay ₹{finalPrice.toFixed(2)}</h6>
                <QRCode value={`upi://pay?pa=9059013598-2@ibl&pn=Mystore&am=${finalPrice.toFixed(2)}&cu=INR`} size={180}  />
                <p className="mt-2"><strong>UPI ID: your-upi-id@bank</strong></p>
              </div>
            )}

            {paymentMethod === "cod" && (
              <div className="mb-3">
                <p className="text-muted">Pay ₹{finalPrice.toFixed(2)} at delivery</p>
              </div>
            )}

            <h5>📧 Email</h5>
            <input  type="email"  className="form-control mb-3" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} placeholder="Enter your email" />
            <button className="btn btn-success w-100" onClick={handleCompletePurchase}>🎉 Complete Purchase</button>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
export default Cart;