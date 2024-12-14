import express from "express";
import getQuestionsByProductId from "../controllers/Show_questions_controller.js";

const Questions = express.Router();

// Get questions by ProductID
Questions.get("/:productId", getQuestionsByProductId);

export default Questions;
