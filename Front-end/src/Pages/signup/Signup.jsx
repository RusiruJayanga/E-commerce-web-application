import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userAddress: "",
    phoneNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.userName.trim()) {
      newErrors.userName = "Username is required.";
    } else if (formData.userName.length < 3) {
      newErrors.userName = "Username must be at least 3 characters.";
    }
    if (!formData.userEmail.trim()) {
      newErrors.userEmail = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.userEmail)
    ) {
      newErrors.userEmail = "Invalid email address.";
    }
    if (!formData.userAddress.trim()) {
      newErrors.userAddress = "Address is required.";
    } else if (formData.userAddress.length > 100) {
      newErrors.userAddress = "Address cannot exceed 100 characters.";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Sign-up successful:", formData);
      alert("Sign-up successful!");
      setFormData({
        userName: "",
        userEmail: "",
        userAddress: "",
        phoneNumber: "",
        password: "",
      });
    }
  };

  return (
    <div>
      {/* Signup section */}
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
              name="userName"
              placeholder="User name"
              value={formData.userName}
              onChange={handleChange}
            />
            {errors.userName && <p className="error">{errors.userName}</p>}
          </div>
          <div className="signup-input-box">
            <input
              type="text"
              name="userEmail"
              placeholder="User email"
              value={formData.userEmail}
              onChange={handleChange}
            />
            {errors.userEmail && <p className="error">{errors.userEmail}</p>}
          </div>
          <div className="signup-input-box">
            <input
              type="text"
              name="userAddress"
              placeholder="User address"
              value={formData.userAddress}
              onChange={handleChange}
            />
            {errors.userAddress && (
              <p className="error">{errors.userAddress}</p>
            )}
          </div>
          <div className="signup-input-box">
            <input
              type="number"
              name="phoneNumber"
              placeholder="Valid telephone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="signup-input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button className="signup-button">Signup</button>
        </form>
        <Link to="/Login">
          <p className="gap">You already have an account? please Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
