import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder, clearCart, removeFromCart, decreaseQuantity, increaseQuantity } from "./Store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QRCode from "react-qr-code";
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
    if (result.isValid) toast.success("✅ Coupon Applied");
    else toast.error("❌ Invalid Coupon");
  };

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
      paymentMethod,
      customerEmail,
    };

    dispatch(addOrder(orderDetails));
    dispatch(clearCart());
    toast.success("🎉 Purchase completed! Redirecting...");
    navigate("/orders");
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Left - Cart Items */}
        <div className="cart-items">
          <h2 className="section-title">🛒 Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <div className="empty-cart">Your cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.imageUrl} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h5>{item.name}</h5>
                  <p>
                    ₹{item.price} × {item.quantity} ={" "}
                    <strong>₹{item.price * item.quantity}</strong>
                  </p>
                  <div className="cart-actions">
                    <div className="quantity-control">
                      <button onClick={() => dispatch(decreaseQuantity(item))}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => dispatch(removeFromCart(item))}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right - Order Summary */}
        <div className="order-summary">
          <h3 className="section-title">💳 Order Summary</h3>
          <div className="summary-item"><span>Subtotal:</span><span>₹{totalPrice.toFixed(2)}</span></div>
          <div className="summary-item"><span>Discount:</span><span>−₹{buttonDiscountAmount.toFixed(2)}</span></div>
          <div className="summary-item"><span>Coupon ({couponResult.discountPercent}%):</span><span>−₹{couponDiscountAmount.toFixed(2)}</span></div>
          <div className="summary-item"><span>Tax (18%):</span><span>₹{taxAmount.toFixed(2)}</span></div>
          <div className="summary-item"><span>Shipping:</span><span>₹50</span></div>
          <hr />
          <div className="summary-total"><span>Final Total:</span><span>₹{finalPrice.toFixed(2)}</span></div>
          <hr />

          {/* Discounts */}
          <h5>🎁 Quick Discounts</h5>
          <div className="discount-buttons">
            {[10, 20, 30].map((pct) => (
              <button
                key={pct}
                className={buttonDiscount === pct ? "btn-selected" : "btn-outline"}
                onClick={() => setButtonDiscount(pct)}
              >
                {pct}%
              </button>
            ))}
            <button className="btn-reset" onClick={() => setButtonDiscount(0)}>Reset</button>
          </div>

          {/* Coupon */}
          <h5>🔑 Coupon</h5>
          <div className="coupon-box">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
            />
            <button onClick={handleApplyCoupon}>Apply</button>
          </div>

          {/* Payment */}
          <h5>💳 Payment Method</h5>
          <div className="payment-methods">
            <button className={paymentMethod === "qr" ? "btn-selected" : "btn-outline"} onClick={() => setPaymentMethod("qr")}>QR Code</button>
            <button className={paymentMethod === "card" ? "btn-selected" : "btn-outline"} onClick={() => setPaymentMethod("card")}>Card</button>
            <button className={paymentMethod === "cod" ? "btn-selected" : "btn-outline"} onClick={() => setPaymentMethod("cod")}>Cash on Delivery</button>
          </div>

          {paymentMethod === "qr" && (
            <div className="qr-section">
              <h6>Scan UPI QR to pay ₹{finalPrice.toFixed(2)}</h6>
              <QRCode value={`upi://pay?pa=your-upi-id@bank&pn=Mystore&am=${finalPrice.toFixed(2)}&cu=INR`} size={180} />
              <p><strong>UPI ID: your-upi-id@bank</strong></p>
            </div>
          )}

          {paymentMethod === "cod" && (
            <p className="cod-note">Pay ₹{finalPrice.toFixed(2)} at delivery</p>
          )}

          {/* Email */}
          <h5>📧 Email</h5>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="Enter your email"
            className="email-input"
          />

          <button className="purchase-btn" onClick={handleCompletePurchase}>🎉 Complete Purchase</button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
export default Cart;
