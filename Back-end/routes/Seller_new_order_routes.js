import express from "express";
import {
  getOrdersBySeller,
  updateOrderStatus,
} from "../controllers/Seller_new_order_controller.js";

const router = express.Router();

// Fetch order items for a specific seller
router.get("/:sellerId", getOrdersBySeller);

// Update order item status
router.patch("/:orderItemId/status", updateOrderStatus);

export default router;
