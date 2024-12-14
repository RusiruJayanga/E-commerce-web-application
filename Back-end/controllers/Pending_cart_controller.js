import PendingCartModel from "../models/Pending_cart_platform.js";

// Pending Cart list
const PendingCart = async (req, res) => {
  try {
    const { CustomerID, ProductID, Quantity } = req.body;

    // Validate
    if (!CustomerID || !ProductID || !Quantity) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const newPendingCart = new PendingCartModel({
      CustomerID,
      ProductID,
      Quantity,
    });

    await newPendingCart.save();

    res.status(201).json({
      success: true,
      message: "Add to Cart successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Cart add fail!",
    });
  }
};

export { PendingCart };
