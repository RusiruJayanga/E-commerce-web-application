import React, { useState } from "react";
import "./order_status.css";

export const Order_status = ({ onSubmit, closeModal, onCancel }) => {
  const [status, setStatus] = useState("");

  const handleStatusChange = (e) => {
    e.preventDefault();
    onSubmit(status); // Pass the selected status to the parent
  };

  return (
    <div className="order-status-con" onClick={() => closeModal()}>
      <div className="order-status-modal">
        <div className="order-status-modal-header" onClick={() => closeModal()}>
          <p className="order-status-close">&times;</p>
        </div>
        <form className="order-status-form" onSubmit={handleStatusChange}>
          <div className="order-status-input-con">
            <input
              type="radio"
              id="shipped"
              name="status"
              value="shipped"
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="shipped">Shipped</label>
          </div>
          <div className="order-status-input-con">
            <input
              type="radio"
              id="delivered"
              name="status"
              value="delivered"
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="delivered">Delivered</label>
          </div>
          <div className="order-status-button">
            <button type="submit" className="btn order-status-btn-submit">
              Update
            </button>
            <button
              type="button"
              className="btn order-status-btn-cancel"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
