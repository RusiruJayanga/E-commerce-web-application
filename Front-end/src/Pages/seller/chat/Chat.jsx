import React from "react";
import "./chat.css";

const Chat = () => {
  return (
    <div>
      <div class="seller-chat-container">
        <div className="seller-chat-tbl_content">
          <table className="seller-chat-tbl">
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
                  <button className="seller-chat-btn_edit"></button>
                </td>
                <td data-label="Delete">
                  <button className="seller-chat-btn_trash"></button>
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

export default Chat;
