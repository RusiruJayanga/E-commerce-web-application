import express from "express";
import { getAllProducts } from "../controllers/Seller_all_products_controller.js";

const router = express.Router();

// Route to fetch all products
router.get("/", getAllProducts);

export default router;
