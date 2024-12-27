import mongoose from "mongoose";
import AskQuestionsModel from "../models/Ask_questions_platform.js";

// Controller to get questions by CustomerID
const getQuestionsByCustomerId = async (req, res) => {
  try {
    const { customerId } = req.query;

    if (!mongoose.Types.ObjectId.isValid(customerId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid CustomerID format.",
      });
    }

    const questions = await AskQuestionsModel.find({ CustomerID: customerId })
      .populate({
        path: "ProductID",
        select: "ProductName ImageFile",
      })
      .exec();

    if (!questions || questions.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No questions found for this customer.",
      });
    }

    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch questions.",
    });
  }
};

export default getQuestionsByCustomerId;
