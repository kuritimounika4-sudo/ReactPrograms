import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Orders.css"; 

export default function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders) || [];
  const [selectedOrder, setSelectedOrder] = useState(null);

  const groupedByDate = useMemo(() => {
    const groups = {};
    for (const o of orders) {
      const d = new Date(o.createdAt || Date.now());
      const key = d.toLocaleDateString();
      if (!groups[key]) groups[key] = [];
      groups[key].push(o);
    }
    return Object.entries(groups)
      .map(([date, list]) => ({
        date,
        list: list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [orders]);

  const handleCancel = (orderId) => {
    dispatch({ type: "CANCEL_ORDER", payload: { id: orderId } });
  };

  const handleReorder = (order) => {
    dispatch({ type: "REORDER", payload: { orderId: order.id, items: order.items } });
  };

  const formatDateTime = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleString();
  };

  if (!orders.length) {
    return (
      <div className="orders-container">
        <div className="empty-orders-card">
          <h2>You have no orders yet</h2>
          <p>Start exploring tasty items and place your first order.</p>
          <NavLink to="/" className="btn-outline">
            Home
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h2 className="orders-heading">Your Orders</h2>

      {groupedByDate.map(({ date, list }) => (
        <section key={date} className="orders-date-section">
          <h4 className="orders-date">{date}</h4>
          <div className="orders-grid">
            {list.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div>
                    <h3>Order #{order.id}</h3>
                    <span className="order-time">{formatDateTime(order.createdAt)}</span>
                  </div>
                  <div className={`status-badge ${order.status?.toLowerCase()}`}>
                    {order.status}
                  </div>
                </div>

                <div className="order-items">
                  {order.items?.slice(0, 3).map((it) => (
                    <div key={it.id} className="order-item">
                      <span>{it.name}</span>
                      <span>x{it.qty}</span>
                      <span>₹{(it.price * (it.qty || 1)).toFixed(2)}</span>
                    </div>
                  ))}
                  {order.items && order.items.length > 3 && (
                    <div className="more-items">
                      +{order.items.length - 3} more items
                    </div>
                  )}
                </div>

                <div className="order-footer">
                  <span className="order-total">₹{order.total}</span>
                  <div className="order-actions">
                    {order.status?.toLowerCase() !== "cancelled" &&
                      order.status?.toLowerCase() !== "delivered" && (
                        <button
                          className="btn-cancel"
                          onClick={() => handleCancel(order.id)}
                        >
                          Cancel
                        </button>
                      )}
                    <button
                      className="btn-primary"
                      onClick={() => handleReorder(order)}
                    >
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Order details modal */}
      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Order Details #{selectedOrder.id}</h3>
            <p>Placed on: {formatDateTime(selectedOrder.createdAt)}</p>
            <p>Status: {selectedOrder.status}</p>
            <div className="modal-items">
              {selectedOrder.items?.map((it) => (
                <div key={it.id} className="modal-item">
                  <span>{it.name}</span>
                  <span>x{it.qty}</span>
                  <span>₹{(it.price * (it.qty || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <p className="modal-total">Total: ₹{selectedOrder.total}</p>
            {selectedOrder.address && (
              <>
                <h4>Delivery Address</h4>
                <p>{selectedOrder.address}</p>
              </>
            )}
            <button className="btn-secondary" onClick={() => setSelectedOrder(null)}>  Close </button>
          </div>
        </div>
      )}
    </div>
  );
}
