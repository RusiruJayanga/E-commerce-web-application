import PendingCartModel from "../models/Pending_cart_platform.js";
import ECommerceModel from "../models/Product_add_platform.js";
import mongoose from "mongoose";

// Add proucts to Pending Cart, when user click add to cart button
const addToPendingCart = async (req, res) => {
  try {
    const { CustomerID, ProductID, Quantity } = req.body;

    // Validate input
    if (!CustomerID || !ProductID || !Quantity) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Fetch product details from the `ecommerceproduct` collection
    const product = await ECommerceModel.findById(ProductID);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    if (product.Quantity < Quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient product quantity available.",
      });
    }

    // Create a new pending cart entry with additional product details
    const Suresh_PendingCart = new PendingCartModel({
      CustomerID,
      ProductID,
      Quantity,
      ProductName: product.ProductName,
      Price: product.Price,
      Discount: product.Discount,
      Category: product.Category,
      ImageFile: product.ImageFile,
    });

    await Suresh_PendingCart.save();

    // Reduce the product quantity in the `ecommerceproduct` collection
    product.Quantity -= Quantity;
    await product.save();

    res.status(201).json({
      success: true,
      message: "Product added to cart successfully!",
      cartDetails: Suresh_PendingCart,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Failed to add product to cart.",
    });
  }
};

// Fetch pending cart items for a specific customer

const getPendingCartItems = async (req, res) => {
  try {
    const { CustomerID } = req.params;
    console.log("Received CustomerID:", CustomerID);

    // checking, is customerid is corrector wrong
    if (!mongoose.Types.ObjectId.isValid(CustomerID)) {
      return res.status(400).json({
        success: false,
        message: "Invalid CustomerID format.",
      });
    }

    const customerIdObj = new mongoose.Types.ObjectId(CustomerID);

    // Fetch cart items using CustomerID
    const cartItems = await PendingCartModel.find({
      CustomerID: customerIdObj,
    }).populate("ProductID");

    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No items found in the cart.",
      });
    }

    res.status(200).json({
      success: true,
      cartItems,
    });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch cart items.",
    });
  }
};

//remove items from cart
const removeFromPendingCart = async (req, res) => {
  const { id } = req.params;
  console.log(`Received ProductID: ${id}`);

  if (!id) {
    return res.status(400).json({ error: "ProductID is required" });
  }

  try {
    const productId = new mongoose.Types.ObjectId(id);

    // Delete the item from the Mongo
    const result = await PendingCartModel.deleteOne({ _id: productId });

    if (result.deletedCount > 0) {
      return res
        .status(200)
        .json({ message: `Item with ProductID: ${id} deleted successfully.` });
    } else {
      return res
        .status(404)
        .json({ message: `No item found with ProductID: ${id}.` });
    }
  } catch (error) {
    console.error(`Error removing item: ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export { addToPendingCart, getPendingCartItems, removeFromPendingCart };
