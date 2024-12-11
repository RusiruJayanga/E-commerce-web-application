import React from "react";
import "./seller_product_delete.css";

export const Delete = ({ onSubmit, onCancel, closeModal, children }) => {
  return (
    <div
      className="seller-product-delete-modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="seller-product-delete-modal">
        <div
          className="seller-product-delete-modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
          <p className="seller-product-delete-close">&times;</p>
        </div>
        <div className="seller-product-delete-modal-content">
          <img
            className="seller-product-delete-image"
            src="delete.png"
            alt=""
          />
          <h4>Are you want to delete this item?</h4>
        </div>
        <div className="seller-product-delete-modal-footer">
          <button
            type="submit"
            className="btn seller-product-delete-btn-submit"
            onClick={() => onSubmit("Submit button was clicked")}
          >
            Conform
          </button>
          <button
            type="submit"
            className="btn seller-product-delete-btn-cancel"
            onClick={() => onCancel("Cancel button was clicked")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
