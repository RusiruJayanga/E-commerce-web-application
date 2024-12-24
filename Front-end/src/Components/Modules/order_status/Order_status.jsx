import React, { useState } from "react";
import "./order_status.css";

export const Order_status = ({ onSubmit, closeModal, onCancel }) => {
  return (
    <div
      className="order-status-con"
      onClick={(e) => {
        if (e.target.className === "order-status-con") closeModal();
      }}
    >
      <div className="order-status-modal">
        <div className="order-status-modal-header" onClick={() => closeModal()}>
          <p className="order-status-close">&times;</p>
        </div>
        <form className="order-status-form">
          <div className="order-status-input-con">
            <input
              className="order-status-input"
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            />
              <label for="html">Shipped</label>
          </div>
          <div className="order-status-input-con">
            <input
              className="order-status-input"
              type="radio"
              id="css"
              name="fav_language"
              value="CSS"
            />
              <label for="css">Delivered</label>
          </div>

          <div className="order-status-button">
            <button type="submit" className="btn order-status-btn-submit">
              Update
            </button>
            <button
              type="button"
              className="btn order-status-btn-cancel"
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
