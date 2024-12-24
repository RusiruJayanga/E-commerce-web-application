import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { Seller_answer } from "../../../Components/Modules/seller_answer/Seller_answer";
import "./chat.css";

const Chat = () => {
  const [questions, setQuestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const sellerId = localStorage.getItem("sellerId");

  // Fetch questions based on sellerId
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/productsreplyquestions?sellerId=${sellerId}`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    if (sellerId) {
      fetchQuestions();
    }
  }, [sellerId]);

  // Update answer for a question
  const handleUpdateAnswer = async (answer) => {
    try {
      await axios.put(
        `http://localhost:3000/api/productsreplyquestions/${selectedQuestion._id}`,
        {
          answer,
        }
      );
      // Update local state
      setQuestions((prev) =>
        prev.map((q) =>
          q._id === selectedQuestion._id ? { ...q, Answer: answer } : q
        )
      );

      setModalOpen(false); // Close modal
    } catch (error) {
      console.error("Error updating answer:", error);
    }
  };

  if (!sellerId) {
    return <div>Please log in to view your questions.</div>;
  }

  return (
    <div>
      <div className="seller-chat-container">
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
              {questions.map((question) => (
                <tr key={question._id}>
                  <td>
                    <img
                      className="seller-chat-table-image"
                      src={
                        `http://localhost:3000/uploads/${question.ProductID.ImageFile}` ||
                        "product.png"
                      }
                      alt="edit"
                    />
                  </td>
                  <td data-label="Product Name">
                    {question.ProductID.ProductName}
                  </td>
                  <td data-label="Question" className="seller-chat-qa">
                    {question.Question}
                  </td>
                  <td data-label="Answer" className="seller-chat-qa">
                    {question.Answer}
                  </td>
                  <td data-label="Action">
                    <button
                      className="seller-chat-btn_reply"
                      onClick={() => {
                        setSelectedQuestion(question);
                        setModalOpen(true);
                      }}
                    >
                      Reply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalOpen &&
        createPortal(
          <Seller_answer
            closeModal={() => setModalOpen(false)}
            onSubmit={(answer) => handleUpdateAnswer(answer)}
            onCancel={() => setModalOpen(false)}
          />,
          document.body
        )}
    </div>
  );
};

export default Chat;
