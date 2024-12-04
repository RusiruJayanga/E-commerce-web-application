import React from "react";

import Footer from "../../../Components/footer/Footer";

const Chat = () => {
  return (
    <div>
      <div class="all-product-container">
        <div className="all-product-tbl_content">
          <table className="all-product-tbl">
            <thead>
              <tr>
                <th>User ID</th>
                <th>User ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Status</th>
                <th colspan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat start */}
              <tr>
                <td data-label="User Id">0001</td>
                <td data-label="User Id">0001</td>
                <td data-label="Name">John Doe</td>
                <td data-label="Email">John@gmail.com</td>
                <td data-label="Status">Active</td>
                <td data-label="Edit">
                  <button className="all-product-btn_edit"></button>
                </td>
                <td data-label="Delete">
                  <button className="all-product-btn_trash"></button>
                </td>
              </tr>
              {/* Repeat end */}
            </tbody>
          </table>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Chat;
