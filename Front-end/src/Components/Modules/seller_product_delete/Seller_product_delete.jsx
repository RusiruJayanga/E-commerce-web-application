import React from "react";
import "./seller_product_delete.css";

export const Delete = ({ onSubmit, closeModal }) => {
  return (
    <div
      className="seller-product-delete-modal-container"
      onClick={(e) => {
        if (e.target.className === "seller-product-delete-modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="seller-product-delete-modal">
        <div
          className="seller-product-delete-modal-header"
          onClick={() => closeModal()}
        >
          <p className="seller-product-delete-close">&times;</p>
        </div>
        <div className="seller-product-delete-modal-content">
          <img
            className="seller-product-delete-image"
            src="delete.png"
            alt="Delete"
          />
          <h4>Are you sure you want to delete this product?</h4>
        </div>
        <div className="seller-product-delete-modal-footer">
          <button
            type="submit"
            className="btn seller-product-delete-btn-submit"
            onClick={onSubmit}
          >
            Confirm
          </button>
          <button
            className="btn seller-product-delete-btn-cancel"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
