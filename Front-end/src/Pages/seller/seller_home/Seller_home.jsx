import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./seller_home.css";
import { Delete } from "../../../Components/Modules/seller_product_delete/Seller_product_delete";
import { Edit } from "../../../Components/Modules/seller_product_edit/Seller_product_edit";

const Seller_home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  const [editOpen, editModalOpen] = useState(false);
  const [editmessage, editMessage] = useState("");

  const handleeditButtonClick = (value) => {
    editModalOpen(false);
    editMessage(value);
  };

  return (
    <div>
      <div class="all-product-container">
        <div className="all-product-tbl_content">
          <table className="all-product-tbl">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
                <th colspan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat start */}
              <tr>
                <td data-label="User Id">
                  <img
                    className="seller-home-table-image"
                    src="product.png"
                    alt=""
                  />
                </td>
                <td data-label="User Id">name db</td>
                <td data-label="Name">Quantity db</td>
                <td data-label="Email">Price db</td>
                <td data-label="Status">Status db </td>
                <td data-label="Edit">
                  <button
                    className="all-product-btn_edit"
                    onClick={() => editModalOpen(true)}
                  >
                    Edit
                  </button>
                  {editOpen &&
                    createPortal(
                      <Edit
                        closeModal={handleeditButtonClick}
                        onSubmit={handleeditButtonClick}
                        onCancel={handleeditButtonClick}
                      ></Edit>,
                      document.body
                    )}
                </td>
                <td data-label="Delete">
                  <button
                    className="all-product-btn_trash"
                    onClick={() => setModalOpen(true)}
                  >
                    Delete
                  </button>
                  {modalOpen &&
                    createPortal(
                      <Delete
                        closeModal={handleButtonClick}
                        onSubmit={handleButtonClick}
                        onCancel={handleButtonClick}
                      ></Delete>,
                      document.body
                    )}
                </td>
              </tr>
              {/* Repeat end */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Seller_home;
