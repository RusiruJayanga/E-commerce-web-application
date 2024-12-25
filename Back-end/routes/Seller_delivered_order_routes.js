import express from "express";
import { getOrdersdeliveredBySeller } from "../controllers/Seller_delivered_order_controller.js";

const router = express.Router();

// Fetch order items for a specific seller
router.get("/:sellerId", getOrdersdeliveredBySeller);

export default router;
