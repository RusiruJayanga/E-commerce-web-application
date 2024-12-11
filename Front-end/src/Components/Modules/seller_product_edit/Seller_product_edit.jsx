import React from "react";
import "./seller_product_edit.css";

export const Edit = ({ onSubmit, onCancel, closeModal, children }) => {
  return (
    <div
      className="seller-product-edit-modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="seller-product-edit-modal">
        <div
          className="seller-product-edit-modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
          <p className="seller-product-edit-close">&times;</p>
        </div>
        <div className="seller-product-edit-modal-content">
          <img className="seller-product-edit-image" src="edit.png" alt="" />
          <h4>Are you want to edit this item?</h4>
        </div>
        <div className="seller-product-edit-modal-footer">
          <button
            type="submit"
            className="btn seller-product-edit-btn-submit"
            onClick={() => onSubmit("Submit button was clicked")}
          >
            Conform
          </button>
          <button
            type="submit"
            className="btn seller-product-edit-btn-cancel"
            onClick={() => onCancel("Cancel button was clicked")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
