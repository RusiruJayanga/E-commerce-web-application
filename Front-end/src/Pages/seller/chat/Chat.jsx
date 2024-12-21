import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Seller_answer } from "../../../Components/Modules/seller_answer/Seller_answer";
import "./chat.css";

const Chat = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <div>
      <div class="seller-chat-container">
        <div className="seller-chat-tbl_content">
          <table className="seller-chat-tbl">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat start */}
              <tr>
                <td>
                  <img className="seller-chat-table-image" src="edit.png" />
                </td>
                <td data-label="Product Name">0001</td>
                <td data-label="Question" className="seller-chat-qa">
                  John Doe Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Labore, obcaecati?
                </td>
                <td data-label="Answer" className="seller-chat-qa">
                  John@gmail.comJohn Doe Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Labore, obcaecati?
                </td>
                <td data-label="Action">
                  <button
                    className="seller-chat-btn_reply"
                    onClick={() => setModalOpen(true)}
                  >
                    Reply
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
          <Seller_answer
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          >
            <h1>This is a modal</h1>
            <br />
            <p>This is the modal description</p>
          </Seller_answer>,
          document.body
        )}
    </div>
  );
};

export default Chat;
