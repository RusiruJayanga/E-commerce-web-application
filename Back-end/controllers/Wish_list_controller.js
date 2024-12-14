import WishlistModel from "../models/Wish_list_platform.js";

// Wish list
const Wishlist = async (req, res) => {
  try {
    const { CustomerID, ProductID } = req.body;

    // Validate
    if (!CustomerID || !ProductID) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const newWishlist = new WishlistModel({
      CustomerID,
      ProductID,
    });

    await newWishlist.save();

    res.status(201).json({
      success: true,
      message: "Add to wishlist successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Wishlist add fail!",
    });
  }
};

export { Wishlist };
