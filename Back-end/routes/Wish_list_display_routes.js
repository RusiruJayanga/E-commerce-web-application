import express from "express";
import WishlistModel from "../models/Wish_list_platform.js";

const WishlistDisplay = express.Router();

// Get wishlist by CustomerID
WishlistDisplay.get("/:customerId", async (req, res) => {
  try {
    const { customerId } = req.params;
    const wishlist = await WishlistModel.find({ CustomerID: customerId })
      .populate("ProductID", "ProductName Price Discount ImageFile")
      .exec();

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving wishlist", error });
  }
});

// Delete a product from the wishlist
WishlistDisplay.delete("/:wishlistId", async (req, res) => {
  try {
    const { wishlistId } = req.params;
    await WishlistModel.findByIdAndDelete(wishlistId);
    res.status(200).json({ message: "Wishlist item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting wishlist item", error });
  }
});

export default WishlistDisplay;
