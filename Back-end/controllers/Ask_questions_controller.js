import AskQuestionsModel from "../models/Ask_questions_platform.js";

// Wish list
const AskQuestions = async (req, res) => {
  try {
    const { CustomerID, ProductID, Question, Answer } = req.body;

    // Validate
    if (!CustomerID || !ProductID || !Question) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const newAskQuestions = new AskQuestionsModel({
      CustomerID,
      ProductID,
      Question,
      Answer,
    });

    await newAskQuestions.save();

    res.status(201).json({
      success: true,
      message: "Send message successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Message send fail!",
    });
  }
};

export { AskQuestions };
