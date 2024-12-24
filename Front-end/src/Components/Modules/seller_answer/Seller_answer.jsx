import React, { useState } from "react";
import "./seller_answer.css";

export const Seller_answer = ({ onSubmit, closeModal, onCancel }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answer);
  };

  return (
    <div
      className="seller-answer-con"
      onClick={(e) => {
        if (e.target.className === "seller-answer-con") closeModal();
      }}
    >
      <div className="seller-answer-modal">
        <div
          className="seller-answer-modal-header"
          onClick={() => closeModal()}
        >
          <p className="seller-answer-close">&times;</p>
        </div>
        <form className="seller-answer-form" onSubmit={handleSubmit}>
          <input
            className="seller-answer-input"
            type="text"
            placeholder="Type your answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          <div className="seller-answer-button">
            <button type="submit" className="btn seller-answer-btn-submit">
              Send
            </button>
            <button
              type="button"
              className="btn seller-answer-btn-cancel"
              onClick={() => onCancel()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
