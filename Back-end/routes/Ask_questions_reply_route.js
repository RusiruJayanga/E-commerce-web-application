import express from "express";
import AskQuestionsModel from "../models/Ask_questions_platform.js";

const AskQuestionReply = express.Router();

// Get questions by seller ID
AskQuestionReply.get("/", async (req, res) => {
  const { sellerId } = req.query;

  try {
    const questions = await AskQuestionsModel.find().populate({
      path: "ProductID",
      select: "ProductName SellerID ImageFile",
    });

    const filteredQuestions = questions.filter(
      (question) => question.ProductID?.SellerID.toString() === sellerId
    );

    res.status(200).json(filteredQuestions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ message: "Error fetching questions", error });
  }
});

// Update answer for a question
AskQuestionReply.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { answer } = req.body;

  try {
    const question = await AskQuestionsModel.findByIdAndUpdate(
      id,
      { Answer: answer },
      { new: true }
    );

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: "Error updating answer", error });
  }
});

export default AskQuestionReply;
