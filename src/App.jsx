// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import "./App.css";
import { Nav } from "react-bootstrap";


function TopHeader({ cartCount }) {

  const isAuthenticated = useSelector((state) => state.userAuth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const [user, setUser] = useState(null);

  

const handleSubmit = (e) => {
  e.preventDefault();
  const err = validate();
  setErrors(err);
  if (Object.keys(err).length) return;

  setSubmitting(true);
  setTimeout(() => {
    // ✅ Save user in Redux
    dispatch(registerUser({
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      address: form.address,
    }));

    setSubmitting(false);
    setSuccessMsg("Account created successfully! Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  }, 1000);
};
 useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedIn) setUser(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };
  

  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`top-header ${isShrunk ? "shrink" : ""}`}>
      {/* Brand */}
      <div className="brand">TastySecrets</div>
     
    

      {/* Right controls */}
      <div className="right-controls">
        <NavLink to="/cart" className="cart-link">
          🛒 Cart <span className="cart-badge">{cartCount}</span>
        </NavLink>

               
             {!user ? (
        <>
          <Link to="/login" className="btn btn-login">Login</Link>
            <Link to="/signup" className="btn btn-signup">Signup</Link>

        </>
      ) : (
        <>
          <span style={{ marginRight: "20px" }}>Hi {user.firstName} 👋</span>
          <button onClick={handleLogout} style={{ background: "white", color: "#146c43", border: "none", padding: "5px 10px", borderRadius: "5px" }}>
            Logout
          </button>
        </>
      )}

          </div>
      </div>
  
  );
}

function NavLinksRow() {
  return (
    <div className="nav-row">
      <NavLink to="/">🏠 Home</NavLink>
      <NavLink to="/veg">🥗 Veg</NavLink>
      <NavLink to="/nonveg">🍗 NonVeg</NavLink>
      <NavLink to="/milk">🧋 Milk</NavLink>
      <NavLink to="/fruits">🍎 Fruits</NavLink>
      <NavLink to="/chocolate">🍫 Chocolate</NavLink>
      <NavLink to="/drinks">🥤 Drinks</NavLink>
      <NavLink to="/orders">🧾 Orders</NavLink>
      <NavLink to="/aboutus">👤 About Us</NavLink>
      <NavLink to="/contactus">📞 Contact Us</NavLink>
    </div>
  );
}

function App() {
  const cartItems = useSelector((state) => state.cart) || [];
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <BrowserRouter>
      {/* Top header */}
      <TopHeader cartCount={cartCount} />

      {/* Navigation row */}
      <NavLinksRow />

      {/* Routes */}
      <div className="page-container">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
