import express from "express";
import ECommerceModel from "../models/Product_add_platform.js";

const router = express.Router();

// Fetch products by SellerID
router.get("/", async (req, res) => {
  const { sellerID } = req.query;

  // Check if sellerID is provided
  if (!sellerID) {
    return res.status(400).json({ message: "SellerID is required" });
  }

  try {
    // Filter products by SellerID
    const products = await ECommerceModel.find({ SellerID: sellerID });

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found for this SellerID" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products", error });
  }
});

export default router;
