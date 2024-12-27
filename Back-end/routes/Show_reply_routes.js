import express from "express";
import getQuestionsByCustomerId from "../controllers/Show_reply_controller.js";

const Reply = express.Router();
// Define the route
Reply.get("/reply", getQuestionsByCustomerId);

export default Reply;
