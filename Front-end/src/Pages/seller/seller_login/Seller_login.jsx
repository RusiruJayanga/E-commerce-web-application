import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./seller_login.css";

const Seller_login = () => {
  const [formData, setFormData] = useState({
    SellerEmail: "",
    SellerPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.SellerEmail.trim()) {
      newErrors.SellerEmail = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.SellerEmail)
    ) {
      newErrors.SellerEmail = "Invalid email address.";
    }
    if (!formData.SellerPassword.trim()) {
      newErrors.SellerPassword = "Password is required.";
    } else if (formData.SellerPassword.length < 6) {
      newErrors.SellerPassword = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setApiError(""); // Clear API error on input change
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
        "http://localhost:3000/api/sellerauthentication/sellerlogin",
        formData
      );

      if (response.data.success) {
        console.log("Login successful:", response.data);
        navigate("/Seller_home"); // Redirect to home page
      } else {
        setApiError(response.data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Your email or password is incorrect!");
    }
  };

  return (
    <div className="seller-login-main">
      {/* Seller login section */}
      <div className="seller-login-con">
        <h3 className="text-hili">Seller Login</h3>
        <form className="gap" onSubmit={handleSubmit}>
          <div className="seller-login-input-box">
            <input
              type="text"
              name="SellerEmail"
              placeholder="Company email"
              value={formData.SellerEmail}
              onChange={handleChange}
            />
            {errors.SellerEmail && (
              <p className="error">{errors.SellerEmail}</p>
            )}
          </div>
          <div className="seller-login-input-box">
            <input
              type="password"
              name="SellerPassword"
              placeholder="Password"
              value={formData.SellerPassword}
              onChange={handleChange}
            />
            {errors.SellerPassword && (
              <p className="error">{errors.SellerPassword}</p>
            )}
          </div>
          {apiError && <p className="error">{apiError}</p>}
          <button className="seller-login-button" type="submit">
            Login
          </button>
        </form>
        <Link to="/Seller_signup">
          <p className="gap">Don't have an account? Sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default Seller_login;
