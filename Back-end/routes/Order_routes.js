import express from "express";
import { createOrder } from "../controllers/Order_Controller.js";

const OrderRouter = express.Router();

// create a new order Route
OrderRouter.post("/orderdatasend", createOrder);

export default OrderRouter;
