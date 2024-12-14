import express from "express";
import { AskQuestions } from "../controllers/Ask_questions_controller.js";

const AskQuestionsRouter = express.Router();

// Admin contact
AskQuestionsRouter.post("/askquestionsadd", AskQuestions);

export default AskQuestionsRouter;
