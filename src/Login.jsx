import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login()
 {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("⚠️ Please enter email and password.");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      setError("⚠️ No account found. Please sign up first.");
      return;
    }

    if (savedUser.email !== email || savedUser.password !== password) {
      setError("⚠️ Invalid email or password.");
      return;
    }

    // ✅ Save logged-in user session
    localStorage.setItem("loggedInUser", JSON.stringify(savedUser));

    setError("");
    console.log("✅ Login successful");

    // Navigate to Home
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">🌱</div>
          <h2>Log In</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input  type="email"  placeholder="Enter your email"  value={email}   onChange={(e) => setEmail(e.target.value)}  required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input  type="password"  placeholder="********"  value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="options">
            <label> <input type="checkbox" /> Remember me </label>  <a href="/">Forgot password?</a>
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="auth-btn">Log In</button>
        </form>

        <p className="divider">Or Sign In with</p>
           <div className="social-icons">
             <button className="icon fb">f</button>
             <button className="icon google">G</button>
             <button className="icon apple"></button>
           </div>

        <p className="switch">  Don’t have an account? <Link to="/signup">Sign Up</Link> </p>
      </div>
    </div>
  );
}

export default Login;
