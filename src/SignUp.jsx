import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
  firstName: e.target[0].value, // first input field
  email: e.target[1].value,
  password: e.target[2].value
};

localStorage.setItem("user", JSON.stringify(newUser));
alert("✅ Signup successful!");
navigate("/login");

    // validation
    if (!formData.firstName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("⚠️ Passwords do not match.");
      return;
    }

    // save to localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
        password: formData.password,
      })
    );

    setError("");
    console.log("✅ User Registered:", formData);

    // navigate to login
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <button className="back-btn">←</button>
          <h2>Sign Up</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <p className="switch">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
