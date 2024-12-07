import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully:", formData);
      // You can add a function to send data to the server here

      // Reset form
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
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
            <img className="ontact-icon" src="wish-list.png" alt="" />
            <h4>Address</h4>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div className="contact-phone details">
            <img className="ontact-icon" src="wish-list.png" alt="" />
            <h4>Phone</h4>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div className="contact-email details">
            <img className="ontact-icon" src="wish-list.png" alt="" />
            <h4>Email</h4>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="contact-right-side">
          <h3 className="text-hili">Send us a message</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
            quae inventore reiciendis deserunt. Temporibus impedit quae aliquid
            fugit at maiores consectetur ipsum odio velit sunt cupiditate minus,
            modi numquam.
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
            <button className="contact-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
