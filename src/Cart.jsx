import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from './Store';
import { calculateButtonDiscount, calculateTotal, getCouponDiscount } from './discountUtils';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import QRCode from 'react-qr-code';
import { balloonsUp } from './Animation';
import './Cart.css';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);  // your cart
  const [customerEmail, setCustomerEmail] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponResult, setCouponResult] = useState({ isValid: false, discountPercent: 0, discountAmount: 0 });
  const [buttonDiscount, setButtonDiscount] = useState(0);
  const [isButtonApplied, setIsButtonApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const totalPrice = calculateTotal(cartItems);
  const taxAmount = (totalPrice * 0.18).toFixed(2); 
  const buttonDiscountAmount = calculateButtonDiscount(totalPrice, buttonDiscount);
  const priceAfterBtn = totalPrice - buttonDiscountAmount;
  const couponDiscountAmount = couponResult.isValid ? (priceAfterBtn * couponResult.discountPercent / 100) : 0;
  const finalPrice = priceAfterBtn - couponDiscountAmount;

  const handleApplyCoupon = () => {
    const result = getCouponDiscount(couponCode, priceAfterBtn);
    setCouponResult(result);
  };

  const handleCheckoutEmail = () => {
    if (!customerEmail) {
      Swal.fire('Error', 'Please enter your email to proceed.', 'error');
      return;
    }
    const templateParams = {
      order_id: Date.now(),  // or your order id logic
      orders: cartItems.map(item => ({
        name: item.name,
        price: (item.price * item.quantity).toFixed(2),
        units: item.quantity,
      })),
      cost: {
        shipping: "0.00",
        tax: taxAmount,
        total: finalPrice.toFixed(2),
      },
      email: customerEmail,
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then(() => Swal.fire('Success', 'Email sent successfully!', 'success'))
      .catch(() => Swal.fire('Error', 'Failed to send email. Try later.', 'error'));
  };

  const handleCompletePurchase = () => {
    const purchaseDetails = {
      date: new Date().toLocaleString(),
      items: cartItems,
      total: finalPrice.toFixed(2),
    };
    dispatch(addOrder(purchaseDetails));
    dispatch(clearCart());
    Swal.fire('🎉 Order Placed!', `Total: ₹${finalPrice.toFixed(2)}`, 'success');
    balloonsUp(3000);
  };

  return (
    <div className="cart-page-container">
      <h1>🛒 Shopping Cart</h1>
      <div className="cart-main">
        {/* Left side: Items */}
        <div className="cart-items-section">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td className="product-cell">
                      <img src={item.imageUrl} alt={item.name} className="prod-img"/>
                      <div className="prod-info">
                        <div className="prod-name">{item.name}</div>
                        <div className="prod-weight">{item.weight || ''}</div>
                      </div>
                    </td>
                    <td>₹{item.price.toFixed(2)}</td>
                    <td>
                      <button className="qty-btn" onClick={() => dispatch(decreaseQuantity(item))}>−</button>
                      <span className="qty-num">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => dispatch(increaseQuantity(item))}>+</button>
                    </td>
                    <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="remove-btn" onClick={() => dispatch(removeFromCart(item))}>×</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Right side: Summary & Checkout */}
        <div className="order-summary-section">
          <div className="summary-box">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Items ({cartItems.length})</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            {isButtonApplied && (
              <div className="summary-row discount">
                <span>Button Discount ({buttonDiscount}%)</span>
                <span>- ₹{buttonDiscountAmount.toFixed(2)}</span>
              </div>
            )}
            {couponResult.isValid && (
              <div className="summary-row discount">
                <span>Coupon Discount ({couponResult.discountPercent}%)</span>
                <span>- ₹{couponDiscountAmount.toFixed(2)}</span>
              </div>
            )}
            <hr />
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{finalPrice.toFixed(2)}</span>
            </div>

            <div className="coupon-input-group">
              <input
                type="text" placeholder="Enter Coupon Code" value={couponCode} onChange={e => setCouponCode(e.target.value)} />
              <button onClick={handleApplyCoupon}>Apply Coupon</button>
            </div>

            <div className="email-section">
              <input type="email"  placeholder="Enter your Gmail to receive order confirmation" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)}/>
            </div>

            <div className="checkout-actions">
              <button className="btn-primary" onClick={handleCheckoutEmail} disabled={cartItems.length === 0}>CheckOut & Send Email</button>
              <button className="btn-success" onClick={handleCompletePurchase} disabled={cartItems.length === 0}> Complete Purchase </button>
            </div>

            <div className="payment-methods-section">
              <h3>Select Payment Method:</h3>
              <button  className={paymentMethod === 'qr' ? 'method-btn selected' : 'method-btn'} onClick={() => setPaymentMethod('qr')} >QR Code </button>
              <button  className={paymentMethod === 'card' ? 'method-btn selected' : 'method-btn'}  onClick={() => setPaymentMethod('card')} >Card</button>
            </div>

            {paymentMethod === 'qr' && (
              <div className="qr-section">
                <h4>Scan UPI QR code to pay ₹{finalPrice.toFixed(2)}</h4>
                <QRCode value={`upi://pay?pa=your-upi-id&pn=GroceryStore&am=${finalPrice.toFixed(2)}&cu=INR`}size={180}/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
