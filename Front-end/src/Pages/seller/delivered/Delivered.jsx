import React from "react";
import "./delivered.css";
import Footer from "../../../Components/footer/Footer";

const Delivered = () => {
  return (
    <div>
      <div class="delivered-container">
        <div className="delivered-tbl_content">
          <table className="delivered-tbl">
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
                  <button className="delivered-btn_edit"></button>
                </td>
                <td data-label="Delete">
                  <button className="delivered-btn_trash"></button>
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

export default Delivered;
