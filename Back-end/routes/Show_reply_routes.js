import express from "express";
import getQuestionsByCustomerId from "../controllers/Show_reply_controller.js";

const Reply = express.Router();

Reply.get("/reply", getQuestionsByCustomerId);

export default Reply;
