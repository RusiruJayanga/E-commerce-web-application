import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.length > 100) {
      newErrors.message = "Message cannot exceed 100 characters.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }

    // Prepare data to be sent to the backend
    const dataToSend = {
      Name: formData.name,
      Email: formData.email,
      Message: formData.message,
    };

    setIsSubmitting(true);

    try {
      // Sending the form data to the backend
      const response = await axios.post(
        "http://localhost:3000/api/admincontact/admincsendmessege",
        dataToSend
      );
      if (response.data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
      } else {
        setApiError(response.data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error occurred while sending message:", error);
      setApiError("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false); // Reset the submitting state
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Contact section */}
      <div className="contact-con">
        <div className="contact-left-side">
          <div className="contact-address details">
            <img className="contact-icon" src="wish-list.png" alt="" />
            <h4>Address</h4>
            <p>Pitipana - Thalagala Rd,Homagama</p>
          </div>
          <div className="contact-phone details">
            <img className="contact-icon" src="wish-list.png" alt="" />
            <h4>Phone</h4>
            <p>0115 445 000</p>
          </div>
          <div className="contact-email details">
            <img className="contact-icon" src="wish-list.png" alt="" />
            <h4>Email</h4>
            <p>0115 445 000</p>
          </div>
        </div>
        <div className="contact-right-side">
          <h3 className="text-hili">Send us a message</h3>
          <p>
            Step into a world of luxury, elegance, and exclusivity with us, the
            premier high-end fashion e-commerce platform. We bring you a curated
            selection of the finest designer clothing, accessories, and footwear
            from the most prestigious brands around the world.
          </p>
          <form className="gap" onSubmit={handleSubmit}>
            <div className="contact-input-box">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="contact-input-box">
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="contact-input-box message-box">
              <input
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
              />
              <p className="char-count">
                {formData.message.length}/100 characters{" "}
                {errors.message && <p className="error">{errors.message}</p>}
              </p>
            </div>
            <button
              className="contact-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            {apiError && <p className="error">{apiError}</p>}{" "}
            {/* Display API error */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
