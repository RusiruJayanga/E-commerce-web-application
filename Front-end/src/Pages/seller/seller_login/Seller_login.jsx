import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./seller_login.css";

const Seller_login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Login successful:", formData);
      // Add logic to send formData to the backend

      // Reset form
      alert("Login successful!");
      setFormData({ email: "", password: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Seller login section */}
      <div className="seller-login-con">
        <h3 className="text-hili">Seller account Log in</h3>
        <form className="gap" onSubmit={handleSubmit}>
          <div className="seller-login-input-box">
            <input
              type="text"
              name="email"
              placeholder="Company email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="seller-login-input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
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
