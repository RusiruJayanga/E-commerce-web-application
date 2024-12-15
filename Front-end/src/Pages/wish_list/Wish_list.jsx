import React from "react";
import "./wish_list.css";

const Wish_list = () => {
  return (
    <div>
      <div class="wish-container">
        <div className="wish-tbl_content">
          <table className="wish-tbl">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Discount</th>
                <th>Price</th>
                <th colspan="2"></th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat start */}
              <tr>
                <td data-label="User Id">
                  <img className="wish-image" src="brand-logo.jpg" alt="" />
                </td>
                <td data-label="User Id">0001</td>
                <td data-label="Name">John Doe</td>
                <td data-label="Status">Active</td>
                <td data-label="Delete">
                  <button className="wish-btn trash">Delete</button>
                </td>
                <td data-label="Delete">
                  <button className="wish-btn view ">View</button>
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

export default Wish_list;
