import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Card, Button, Modal, Table, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";



const statusVariant = (status) => {
  switch ((status || "").toLowerCase()) {
    case "delivered":
      return "success";
    case "preparing":
    case "processing":
      return "warning";
    case "out for delivery":
      return "info";
    case "cancelled":
      return "danger";
    default:
      return "secondary";
  }
};

export default function Orders() {
  const dispatch = useDispatch();
  // expects orders array in redux state
  const orders = useSelector((state) => state.orders) || [];
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const groupedByDate = useMemo(() => {
    // group by date (yyyy-mm-dd) for display
    const groups = {};
    for (const o of orders) {
      const d = new Date(o.createdAt || Date.now());
      const key = d.toLocaleDateString();
      if (!groups[key]) groups[key] = [];
      groups[key].push(o);
    }
    // sort dates descending
    return Object.entries(groups)
      .map(([date, list]) => ({ date, list: list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [orders]);

  const openDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeDetails = () => {
    setSelectedOrder(null);
    setShowModal(false);
  };

  const handleCancel = (orderId) => {
    // Replace with your action creator if available
    dispatch({ type: "CANCEL_ORDER", payload: { id: orderId } });
  };

  const handleReorder = (order) => {
    // dispatch an action to add items back to cart (replace with your action creator)
    dispatch({ type: "REORDER", payload: { orderId: order.id, items: order.items } });
    // optionally navigate to cart page (if you have programmatic navigation)
  };

  const formatDateTime = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleString();
  };

  if (!orders.length) {
    return (
      <Container className="py-4">
        <Card className="p-4 text-center">
          <h4 className="mb-2">You have no orders yet</h4>
          <p className="text-muted">Start exploring tasty items and place your first order.</p>
          <div>
            <Button as={NavLink} to="/" variant="outline-primary">Home</Button>
          </div>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h3 className="mb-4">Your Orders</h3>

      {groupedByDate.map(({ date, list }) => (
        <section key={date} className="mb-4">
          <h5 className="mb-3">{date}</h5>
          <Row xs={1} md={2} className="g-3">
            {list.map((order) => (
              <Col key={order.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <Card.Title className="mb-1">Order #{order.id}</Card.Title>
                        <div className="text-muted small">{formatDateTime(order.createdAt)}</div>
                      </div>
                      <div className="text-end">
                        <Badge bg={statusVariant(order.status)} className="mb-2">{order.status}</Badge>
                        <div className="fw-bold">₹{order.total?.toFixed ? order.total.toFixed(2) : order.total}</div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <Table size="sm" borderless className="mb-0">
                        <tbody>
                          {order.items?.slice(0, 3).map((it) => (
                            <tr key={it.id}>
                              <td style={{ padding: "0.3rem 0.75rem" }}>{it.name}</td>
                              <td style={{ padding: "0.3rem 0.75rem", width: 80 }} className="text-end">x{it.qty}</td>
                              <td style={{ padding: "0.3rem 0.75rem", width: 90 }} className="text-end">₹{(it.price * (it.qty || 1)).toFixed(2)}</td>
                            </tr>
                          ))}
                          {order.items && order.items.length > 3 && (
                            <tr>
                              <td colSpan="3" style={{ paddingTop: "0.25rem" }} className="text-muted small">
                                +{order.items.length - 3} more items
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </Table>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>
                        <Button variant="link" size="sm" onClick={() => openDetails(order)}>View details</Button>
                      </div>

                      <div>
                        {order.status?.toLowerCase() !== "cancelled" && order.status?.toLowerCase() !== "delivered" && (
                          <Button variant="outline-danger" size="sm" onClick={() => handleCancel(order.id)} className="me-2">
                            Cancel
                          </Button>
                        )}

                        <Button variant="primary" size="sm" onClick={() => handleReorder(order)}>Reorder</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      ))}

      {/* Order details modal */}
      <Modal show={showModal} onHide={closeDetails} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Details {selectedOrder ? `#${selectedOrder.id}` : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!selectedOrder ? null : (
            <>
              <p className="mb-2 text-muted">Placed on: {formatDateTime(selectedOrder.createdAt)}</p>
              <p className="mb-3"><strong>Status: </strong> <Badge bg={statusVariant(selectedOrder.status)}>{selectedOrder.status}</Badge></p>

              <Table bordered>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th className="text-center">Qty</th>
                    <th className="text-end">Price</th>
                    <th className="text-end">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items?.map((it) => (
                    <tr key={it.id}>
                      <td>{it.name}</td>
                      <td className="text-center">{it.qty}</td>
                      <td className="text-end">₹{it.price.toFixed(2)}</td>
                      <td className="text-end">₹{(it.price * (it.qty || 1)).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan={3} className="text-end">Total</th>
                    <th className="text-end">₹{selectedOrder.total?.toFixed ? selectedOrder.total.toFixed(2) : selectedOrder.total}</th>
                  </tr>
                </tfoot>
              </Table>

              {selectedOrder.address && (
                <>
                  <h6 className="mt-3">Delivery address</h6>
                  <div className="small text-muted">{selectedOrder.address}</div>
                </>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDetails}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
