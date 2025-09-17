import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "./store";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // ✅ external CSS

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.userAuth?.isAuthenticated);
const loginError = useSelector((state) => state.userAuth?.loginError);


 const handleLogin = (e) => {
    e.preventDefault();

  useEffect(() => {
    if (isAuthenticated) {
      Swal.fire({
        title: "✅ Login Successful",
        text: "Welcome back!",
        icon: "success",
        confirmButtonColor: "#28a745",
      }).then(() => {
        navigate("/");
      });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (loginError) {
      Swal.fire({
        title: "❌ Login Failed",
        text: loginError,
        icon: "error",
        confirmButtonColor: "#e74c3c",
      });
    }
  }, [loginError]);

 
    if (!username || !password) {
      Swal.fire({
        title: "⚠ Missing Fields",
        text: "Please enter both username and password.",
        icon: "warning",
        confirmButtonColor: "#f39c12",
      });
      return;
    }

    dispatch(loginUser({ username, password }));
  };
  
  return (
    <div className="login-page"> {/* ✅ External CSS applied */}
      <div className="card shadow p-4 login-card">
        <h2 className="text-center mb-4">🔐 Login</h2>
        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <input  type="text" className="form-control"  placeholder="Username"  value={username}  onChange={(e) => setUsername(e.target.value)}  />
          </div>

          <div className="mb-3">
            <input  type="password" className="form-control"  placeholder="Password"  value={password}   onChange={(e) => setPassword(e.target.value)} />
         </div>

          <button type="submit" className="btn btn-success w-100">  Login  </button>
          <p className="text-center mt-3 mb-1">  Don&apos;t have an account?{" "} <NavLink to="/signup" className="text-primary">Sign Up </NavLink>  </p>
          <p className="text-center"> <NavLink to="/forgot-password" className="text-danger"> Forgot Password? </NavLink> </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
