import React from "react";
import "./seller_answer.css";

export const Seller_answer = ({ onCancel, closeModal }) => {
  return (
    <div
      className="seller-answer-con"
      onClick={(e) => {
        if (e.target.className === "seller-answer-con")
          closeModal("Modal was closed");
      }}
    >
      <div className="seller-answer-modal">
        <div
          className="seller-answer-modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
          <p className="seller-answer-close">&times;</p>
        </div>
        <form className="seller-answer-form">
          <input
            className="seller-answer-input"
            type="text"
            placeholder="Type your answer here..."
            required
          />
          <div className="seller-answer-button">
            <button type="submit" className="btn seller-answer-btn-submit">
              Send
            </button>
            <button
              type="submit"
              className="btn seller-answer-btn-cancel"
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
