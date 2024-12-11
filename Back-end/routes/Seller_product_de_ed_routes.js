import express from "express";
import ECommerceModel from "../models/Product_add_platform.js";

const Delete = express.Router();

// Delete product by ID
Delete.delete("/:id", async (req, res) => {
  try {
    const product = await ECommerceModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
});

export default Delete;
