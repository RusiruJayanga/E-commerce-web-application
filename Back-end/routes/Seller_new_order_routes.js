import express from "express";
import {
  getOrdersBySeller,
  updateOrderStatus,
} from "../controllers/Seller_new_order_controller.js";

const router = express.Router();

router.get("/:sellerId", getOrdersBySeller);

router.patch("/:orderItemId/status", updateOrderStatus);

export default router;
