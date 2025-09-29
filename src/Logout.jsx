import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedIn) setUser(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#146c43", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>Home</Link>

      {!user ? (
        <>
          <Link to="/login" style={{ color: "white", marginRight: "15px" }}>Login</Link>
          <Link to="/signup" style={{ color: "white" }}>Signup</Link>
        </>
      ) : (
        <>
          <span style={{ marginRight: "20px" }}>Hi {user.firstName} 👋</span>
          <button onClick={handleLogout} style={{ background: "white", color: "#146c43", border: "none", padding: "5px 10px", borderRadius: "5px" }}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
