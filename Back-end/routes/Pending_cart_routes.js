import express from "express";
import { PendingCart } from "../controllers/Pending_cart_controller.js";

const PendingCartRouter = express.Router();

// Admin contact
PendingCartRouter.post("/pendingcartadd", PendingCart);

export default PendingCartRouter;
