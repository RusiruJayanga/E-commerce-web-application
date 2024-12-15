import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div>
      <div class="cart-container">
        <div className="cart-tbl_content">
          <table className="cart-tbl">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Discount</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat start */}
              <tr>
                <td data-label="Delete">
                  <button className="cart-btn_trash">Delete</button>
                </td>
                <td data-label="User Id">
                  <img className="cart-image" src="brand-logo.jpg" alt="" />
                </td>
                <td data-label="User Id">0001</td>
                <td data-label="Name">John Doe</td>
                <td data-label="Email">John@gmail.com</td>
                <td data-label="Status">Active</td>
              </tr>
              {/* Repeat end */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="cart-total-con">
        <h4 className="cart-total">Total -</h4>
        <button className="cart-total-button">Check out</button>
      </div>
    </div>
  );
};

export default Cart;
