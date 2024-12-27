import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    CustomerEmail: "",
    CustomerPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.CustomerEmail.trim()) {
      newErrors.CustomerEmail = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.CustomerEmail)
    ) {
      newErrors.CustomerEmail = "Invalid email address.";
    }
    if (!formData.CustomerPassword.trim()) {
      newErrors.CustomerPassword = "Password is required.";
    } else if (formData.CustomerPassword.length < 6) {
      newErrors.CustomerPassword = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setApiError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/customerauthentication/customerlogin",
        formData
      );

      if (response.data.success) {
        // Save token and customerId to localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("customerId", response.data.customerId);
        console.log("Login successful");

        alert("Welcome back!");
        navigate("/");
      } else {
        setApiError(response.data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Your email or password is incorrect!");
    }
  };

  return (
    <div className="login-main">
      <div className="login-con">
        <h3 className="text-hili">Customer Login</h3>
        <form className="gap" onSubmit={handleSubmit}>
          <div className="login-input-box">
            <input
              type="text"
              name="CustomerEmail"
              placeholder="User email"
              value={formData.CustomerEmail}
              onChange={handleChange}
            />
            {errors.CustomerEmail && (
              <p className="error">{errors.CustomerEmail}</p>
            )}
          </div>
          <div className="login-input-box">
            <input
              type="password"
              name="CustomerPassword"
              placeholder="Password"
              value={formData.CustomerPassword}
              onChange={handleChange}
            />
            {errors.CustomerPassword && (
              <p className="error">{errors.CustomerPassword}</p>
            )}
          </div>
          <button className="login-button">Login</button>
        </form>
        <Link to="/Signup">
          <p className="gap">Don't have an account? Sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
