import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.userEmail.trim()) {
      newErrors.userEmail = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.userEmail)
    ) {
      newErrors.userEmail = "Invalid email address.";
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
      console.log("Login successful:", formData);
      alert("Login successful!");
      setFormData({
        userEmail: "",
        password: "",
      });
    }
  };

  return (
    <div>
      {/* Customer login section */}
      <div className="login-con">
        <h3 className="text-hili">Log in</h3>
        <form className="gap" onSubmit={handleSubmit}>
          <div className="login-input-box">
            <input
              type="text"
              name="userEmail"
              placeholder="User email"
              value={formData.userEmail}
              onChange={handleChange}
            />
            {errors.userEmail && <p className="error">{errors.userEmail}</p>}
          </div>
          <div className="login-input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button className="login-button">Login</button>
        </form>
        <Link to="/Signup">
          <p className="gap">Don't have an account? sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
