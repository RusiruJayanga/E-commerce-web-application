import mongoose from "mongoose";
import OrderItem from "../models/Order_item_platform.js";

// Get order items by CustomerID
const getOrdersByCustomerId = async (req, res) => {
  try {
    const { customerId } = req.query;

    // Validate CustomerID format
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid CustomerID format.",
      });
    }

    const orders = await OrderItem.find({ customerId })
      .populate({
        path: "productId",
        select: "ProductName",
      })
      .exec();

    if (!orders || orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No orders found for this customer.",
      });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders by customer:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders.",
    });
  }
};

export default getOrdersByCustomerId;
