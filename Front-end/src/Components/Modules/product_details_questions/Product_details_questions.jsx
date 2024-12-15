import React, { useState } from "react";
import axios from "axios";
import "./product_details_questions.css";

export const Questionsm = ({ onSubmit, onCancel, closeModal, productId }) => {
  const [question, setQuestion] = useState("");
  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const customerId = localStorage.getItem("customerId");

    if (!token) {
      alert("Please login to ask questions.");
      return;
    }
    try {
      await axios.post(
        "http://localhost:3000/api/productsaskquestions/askquestionsadd",
        {
          CustomerID: customerId,
          ProductID: productId,
          Question: question,
          Answer: "pending",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(
        "Your question has been submitted! It can take a few minutes to update chat"
      );
      onSubmit("Submit button was clicked");
    } catch (error) {
      console.error("Error submitting question:", error);
      alert("Failed to submit your question. Please try again.");
    }
  };
  return (
    <div
      className="product-questions-con"
      onClick={(e) => {
        if (e.target.className === "product-questions-con")
          closeModal("Modal was closed");
      }}
    >
      <div className="product-questions-modal">
        <div
          className="product-questions-modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
          <p className="product-questions-close">&times;</p>
        </div>
        <form className="product-questions-form" onSubmit={handleSubmit}>
          <input
            className="product-questions-input"
            type="text"
            placeholder="Type your question here..."
            value={question}
            onChange={handleInputChange}
            required
          />
          <div className="product-questions-button">
            <button type="submit" className="btn product-questions-btn-submit">
              Send
            </button>
            <button
              type="submit"
              className="btn product-questions-btn-cancel"
              onClick={() => onCancel("Cancel button was clicked")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
