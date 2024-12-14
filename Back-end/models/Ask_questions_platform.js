import mongoose from "mongoose";

const AskQuestionsSchema = new mongoose.Schema({
  CustomerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customerauthentication",
    required: true,
  },
  ProductID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ecommerceproduct",
    required: true,
  },
  Question: { type: String, required: true },
  Answer: { type: String, required: true },
});

const AskQuestionsModel = mongoose.model("askquestions", AskQuestionsSchema);

export default AskQuestionsModel;
