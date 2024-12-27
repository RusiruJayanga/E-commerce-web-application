import AskQuestionsModel from "../models/Ask_questions_platform.js";

// Fetch questions by ProductID
const getQuestionsByProductId = async (req, res) => {
  const { productId } = req.params;

  try {
    const questions = await AskQuestionsModel.find({
      ProductID: productId,
    }).populate({
      path: "ProductID",
      populate: {
        path: "SellerID",
        select: "LogoImageFile",
      },
    });

    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ message: "Failed to fetch questions." });
  }
};

export default getQuestionsByProductId;
