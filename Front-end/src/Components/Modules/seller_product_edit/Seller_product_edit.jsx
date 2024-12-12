import React from "react";
import { useNavigate } from "react-router-dom";
import "./seller_product_edit.css";

export const Edit = ({ product, closeModal }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    // Store the product ID in localStorage
    localStorage.setItem("editProductId", product._id);
    // Navigate to the editproduct page
    navigate("/editproduct");
  };

  return (
    <div className="seller-product-edit-modal-container">
      <div className="seller-product-edit-modal">
        <div
          className="seller-product-edit-modal-header"
          onClick={() => closeModal()}
        >
          <p className="seller-product-edit-close">&times;</p>
        </div>
        <div className="seller-product-edit-modal-content">
          <img
            className="seller-product-edit-image"
            src="edit.png"
            alt="Edit"
          />
          <h4>Are you sure you want to edit this product?</h4>
        </div>
        <div className="seller-product-edit-modal-footer">
          <button
            type="submit"
            className="btn seller-product-edit-btn-submit"
            onClick={handleEdit}
          >
            Confirm
          </button>
          <button
            className="btn seller-product-edit-btn-cancel"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
