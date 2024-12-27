import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    CustomerName: "",
    CustomerEmail: "",
    CustomerAddress: "",
    CustomerPhoneNumber: "",
    CustomerPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const validate = () => {
    const newErrors = {};
    if (!formData.CustomerName.trim()) {
      newErrors.CustomerName = "Username is required.";
    } else if (formData.CustomerName.length < 3) {
      newErrors.CustomerName = "Username must be at least 3 characters.";
    }
    if (!formData.CustomerEmail.trim()) {
      newErrors.CustomerEmail = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.CustomerEmail)
    ) {
      newErrors.CustomerEmail = "Invalid email address.";
    }
    if (!formData.CustomerAddress.trim()) {
      newErrors.CustomerAddress = "Address is required.";
    } else if (formData.CustomerAddress.length > 100) {
      newErrors.CustomerAddress = "Address cannot exceed 100 characters.";
    }
    if (!formData.CustomerPhoneNumber.trim()) {
      newErrors.CustomerPhoneNumber = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.CustomerPhoneNumber)) {
      newErrors.CustomerPhoneNumber = "Enter a valid phone number.";
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
        "http://localhost:3000/api/customerauthentication/customersignup",
        formData
      );

      if (response.data.success) {
        // Store token in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("customerId", response.data.customerId);
        console.log("Login successful.");
        alert("Signup successful! Welcome!");

        navigate("/");
      } else {
        setApiError(response.data.message || "Signup failed.");
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="signup-main">
      <div className="signup-con">
        <h3 className="text-hili">Sign up</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
          quae inventore reiciendis deserunt.
        </p>
        <form className="gap" onSubmit={handleSubmit}>
          <div className="signup-input-box">
            <input
              type="text"
              name="CustomerName"
              placeholder="User name"
              value={formData.CustomerName}
              onChange={handleChange}
            />
            {errors.CustomerName && (
              <p className="error">{errors.CustomerName}</p>
            )}
          </div>
          <div className="signup-input-box">
            <input
              type="email"
              name="CustomerEmail"
              placeholder="User email"
              value={formData.CustomerEmail}
              onChange={handleChange}
            />
            {errors.CustomerEmail && (
              <p className="error">{errors.CustomerEmail}</p>
            )}
          </div>
          <div className="signup-input-box">
            <input
              type="text"
              name="CustomerAddress"
              placeholder="User address"
              value={formData.CustomerAddress}
              onChange={handleChange}
            />
            {errors.CustomerAddress && (
              <p className="error">{errors.CustomerAddress}</p>
            )}
          </div>
          <div className="signup-input-box">
            <input
              type="number"
              name="CustomerPhoneNumber"
              placeholder="Valid telephone number"
              value={formData.CustomerPhoneNumber}
              onChange={handleChange}
            />
            {errors.CustomerPhoneNumber && (
              <p className="error">{errors.CustomerPhoneNumber}</p>
            )}
          </div>
          <div className="signup-input-box">
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
          <button className="signup-button">Signup</button>
        </form>
        <Link to="/Login">
          <p className="gap">You already have an account? Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
