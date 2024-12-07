import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./Seller_signup.css";

const Geolocation = [
  { value: "Global", label: "Global" },
  { value: "Local", label: "Local" },
];

const Seller_signup = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyAddress: "",
    phoneNumber: "",
    geolocation: null,
    description: "",
    password: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [filePreview, setFilePreview] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required.";
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.companyEmail)
    ) {
      newErrors.companyEmail = "Invalid email address.";
    }
    if (!formData.companyAddress.trim())
      newErrors.companyAddress = "Address is required.";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number.";
    }
    if (!formData.geolocation)
      newErrors.geolocation = "Please select a geolocation.";
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    } else if (formData.description.length > 100) {
      newErrors.description = "Description cannot exceed 100 characters.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (!formData.file) newErrors.file = "Please upload a company logo.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
    setFilePreview(URL.createObjectURL(file));
  };

  const handleSelectChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, geolocation: selectedOption }));
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
        companyName: "",
        companyEmail: "",
        companyAddress: "",
        phoneNumber: "",
        geolocation: null,
        description: "",
        password: "",
        file: null,
      });
      setFilePreview(null);
    }
  };

  return (
    <div>
      {/* Add section */}
      <div className="seller-signup-con">
        <h3 className="text-hili">Seller account Sign up</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
          quae inventore reiciendis deserunt.
        </p>
        <form className="gap" onSubmit={handleSubmit}>
          <div className="seller-signup-input-box">
            <input
              type="text"
              name="companyName"
              placeholder="Company name"
              value={formData.companyName}
              onChange={handleChange}
            />
            {errors.companyName && (
              <p className="error">{errors.companyName}</p>
            )}
          </div>
          <div className="seller-signup-input-box">
            <input
              type="text"
              name="companyEmail"
              placeholder="Company email"
              value={formData.companyEmail}
              onChange={handleChange}
            />
            {errors.companyEmail && (
              <p className="error">{errors.companyEmail}</p>
            )}
          </div>
          <div className="seller-signup-input-box">
            <input
              type="text"
              name="companyAddress"
              placeholder="Company address"
              value={formData.companyAddress}
              onChange={handleChange}
            />
            {errors.companyAddress && (
              <p className="error">{errors.companyAddress}</p>
            )}
          </div>
          <div className="seller-signup-input-box">
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
          <div className="seller-signup-input-box-select">
            <Select
              placeholder="Geolocation"
              options={Geolocation}
              value={formData.geolocation}
              onChange={handleSelectChange}
            />
          </div>
          {errors.geolocation && <p className="error">{errors.geolocation}</p>}
          <div className="seller-signup-input-box seller-signup-message-box">
            <input
              name="description"
              placeholder="Enter a small description ( Limit to 100 characters )"
              value={formData.description}
              onChange={handleChange}
            />
            <p className="char-count">
              {formData.description.length}/100 characters
            </p>
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </div>
          <div className="seller-signup-input-box margin-top-pass">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="seller-signup-input-box-image">
            <input
              className="seller-signup-input-box-image-input"
              type="file"
              onChange={handleFileChange}
            ></input>
            {filePreview && (
              <img
                className="seller-signup-input-image"
                src={filePreview}
                alt="Preview"
              />
            )}
            {errors.file && <p className="error">{errors.file}</p>}
          </div>
          <button className="seller-signup-button">Signup</button>
        </form>
        <Link to="/Seller_login">
          <p className="gap">You already have an account? please Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Seller_signup;
