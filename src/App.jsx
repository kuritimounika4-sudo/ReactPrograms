// App.jsx
import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Button, Form } from "react-bootstrap";
import { BiLogIn } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// --- Pages (your existing components) ---
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Milk from "./Milk";
import Chocolate from "./Chocolate";
import Drinks from "./Drinks";
import Fruits from "./Fruits";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import Login from "./Login";
import NotFound from "./NotFound";


// -----------------------------------------

function TopHeader({ cartCount }) {
  const dispatch = useDispatch();
  const { isAuthenticated, currentUser } = useSelector(
    (state) => state.userAuth || {}
  );
  
  return (
    <div className="top-header bg-light py-2 shadow-sm">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Left: Brand */}
        <div className="brand-wrapper d-flex align-items-center">
          <div className="navbar-brand fw-bold text-dark">TastySecrets</div>
        </div>

        {/* Center: Search (stacked / responsive) */}
        <div className="search-wrapper flex-grow-1 mx-3 d-none d-md-flex justify-content-center">
          <Form className="d-flex header-search" onSubmit={(e) => e.preventDefault()}>
            <input
              name="q"
              type="search"
              placeholder="Search for products..."
              className="form-control"
              aria-label="Search"
            />
            <Button variant="outline-primary" type="submit" className="ms-2">Search</Button>
          </Form>
        </div>
{/* Right: Cart + Account (separate buttons) */}
<div className="right-controls d-flex align-items-center">
  <NavLink to="/cart" className="me-3 cart-link d-none d-md-inline">
    🛒 Cart <span className="cart-badge">{cartCount}</span>
  </NavLink>
  <NavLink to="/cart" className="me-3 cart-link d-md-none">
    🛒 {cartCount}
  </NavLink>


  {isAuthenticated ? (
            <>
              <span className="me-3">👋 Hi, {currentUser?.username}</span>
              <button
                onClick={() => dispatch(logoutUser())}
                className="btn btn-outline-danger"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/signup" className="btn btn-outline-primary me-2">
                Sign Up
              </NavLink>
              <NavLink to="/login" className="btn btn-primary">
                Login
              </NavLink>
            </>
          )}
  

 
           </div>


          
       
      </Container>

      {/* On small screens show the search below brand+controls for usability */}
      <div className="d-md-none container mt-2 mb-1">
        <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <input
            name="q"
            type="search"
            placeholder="Search for products..."
            className="form-control"
            aria-label="Search"
          />
          <Button variant="outline-primary" type="submit" className="ms-2">Search</Button>
        </Form>
      </div>
    </div>
  );
}

function NavLinksRow() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="navlinks-row">
      <Container>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/">🏠 Home</Nav.Link>
            <Nav.Link as={NavLink} to="/veg">🥗 Veg</Nav.Link>
            <Nav.Link as={NavLink} to="/nonveg">🍗 NonVeg</Nav.Link>
            <Nav.Link as={NavLink} to="/milk">🧋 Milk</Nav.Link>
            <Nav.Link as={NavLink} to="/fruits">🍎 Fruits</Nav.Link>
            <Nav.Link as={NavLink} to="/chocolate">🍫 Chocolate</Nav.Link>
            <Nav.Link as={NavLink} to="/drinks">🥤 Drinks</Nav.Link>
            <Nav.Link as={NavLink} to="/orders">🧾 Orders</Nav.Link>
            <Nav.Link as={NavLink} to="/aboutus">👤 About</Nav.Link>
            <Nav.Link as={NavLink} to="/contactus">📞 Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  const cartItems = useSelector((state) => state.cart) || [];
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <BrowserRouter>
         {/* Top header: brand, search (center), cart/account (right) */}
        <TopHeader cartCount={cartCount} />

         {/* Secondary navbar row with links (collapsible) */}
         <NavLinksRow />
  
      {/* Routes / pages */}
        <Container className="py-4">
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/veg" element={<Veg />} />
              <Route path="/nonveg" element={<NonVeg />} />
              <Route path="/milk" element={<Milk />} />
              <Route path="/fruits" element={<Fruits />} />
              <Route path="/chocolate" element={<Chocolate />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<NotFound />} />
           </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
