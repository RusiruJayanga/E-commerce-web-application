import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Order_status } from "../../../Components/Modules/order_status/Order_status";
import "./new_orders.css";

const New_orders = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };
  return (
    <div>
      <div class="new-order-container">
        <div className="new-order-tbl_content">
          <table className="new-order-tbl">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Product names</th>
                <th>Quantitys</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat start */}
              <tr>
                <td data-label="Order Id">0001</td>
                <td data-label="Product names">0001</td>
                <td data-label="Quantity">John Doe</td>
                <td data-label="Price">John@gmail.com</td>
                <td data-label="Status">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="new-order-btn-status"
                  >
                    Status
                  </button>
                </td>
              </tr>
              {/* Repeat end */}
            </tbody>
          </table>
        </div>
      </div>
      {modalOpen &&
        createPortal(
          <Order_status
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          ></Order_status>,
          document.body
        )}
    </div>
  );
};

export default New_orders;
