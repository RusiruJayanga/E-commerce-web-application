import Order from "../models/Order_platform.js";
import OrderItem from "../models/Order_item_platform.js";
import ECommerceModel from "../models/Product_add_platform.js"; // Assuming this is your product model

// Creating an order with individual products as separate documents
export const createOrder = async (req, res) => {
  try {
    const { customerId, items, totalAmount, paymentId, paymentStatus } =
      req.body;

    if (!customerId || !items || !totalAmount || !paymentId || !paymentStatus) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create the main order
    const newOrder = new Order({
      customerId,
      totalAmount,
      paymentId,
      paymentStatus,
      orderDate: new Date(),
    });

    const savedOrder = await newOrder.save();

    // Create order items
    const orderItemsPromises = items.map(async (item) => {
      const product = await ECommerceModel.findById(item.productId).populate(
        "SellerID"
      );

      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found`);
      }

      const newOrderItem = new OrderItem({
        customerId, // From request body
        SellerID: product.SellerID, // From referenced product document
        orderId: savedOrder._id, // Linked to the main order
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        status: "processing", // Default status
      });

      await newOrderItem.save();
    });

    await Promise.all(orderItemsPromises);

    res.status(201).json({
      message: "Order created successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      message: "Failed to create order",
      error: error.message,
    });
  }
};
