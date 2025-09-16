import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Milk from './Milk';
import Chocolate from './Chocolate';
import Cart from './Cart';
import Orders from './Orders';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Navbar,Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Drinks from './Drinks';
import Fruits from './Fruits';
import "./App.css";
import SignUp from './SignUp';


function App() {

   let cartItems = useSelector((state) => state.cart) || [];

   // Calculate the total quantity of items in the cart
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
        <h1 className="text-center text-primary bg-warning py-1">Welcome</h1>
       <BrowserRouter>
        <Navbar className="navbar" expand="lg">
         <Container>
            <Navbar.Brand as={NavLink} to="/"> TastySecrets</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
             <Navbar.Collapse id="navbar-nav">
             <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">🏠Home</Nav.Link>
            <Nav.Link as={NavLink} to="/veg">🥗VegItems</Nav.Link>
            <Nav.Link as={NavLink} to="/nonveg">🍗NonVegItems</Nav.Link>
            <Nav.Link as={NavLink} to="/milk">🧋Milk</Nav.Link>
            <Nav.Link as={NavLink} to="/fruits">🍎Fruits</Nav.Link>
            <Nav.Link as={NavLink} to="/chocolate">🍫Chocolate</Nav.Link>
            <Nav.Link as={NavLink} to="/drinks">🥤Drinks</Nav.Link>
            <Nav.Link as={NavLink} to="/cart">🛒Cart {cartCount}</Nav.Link>
            <Nav.Link as={NavLink} to="/orders">🧾Orders</Nav.Link>
            <Nav.Link as={NavLink} to="/aboutus"> 👤About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contactus"> 📞Contact Us</Nav.Link>
             <Nav.Link as={NavLink} to="/signup"> Sign Up</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         
        <Routes>
           <Route path="/" element={<Home/>} /> 
           <Route path="/veg" element={<Veg />} />
           <Route path="/nonveg" element={<NonVeg />} />
           <Route path="/milk" element={<Milk />} />
           <Route path="/fruits" element={<Fruits />} />
           <Route path="/chocolate" element={<Chocolate />} />
           <Route path="/drinks" element={<Drinks />} />
           <Route path="/signup" element={<SignUp />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/orders" element={<Orders />} />
           <Route path="/aboutus" element={<AboutUs />} />
           <Route path="/contactus" element={<ContactUs />} />
           <Route path="/*" element={<NotFound />} />
       </Routes>
      
    </BrowserRouter>
      
    </>
  );
}
export default App;


   
    
   
    
    
   