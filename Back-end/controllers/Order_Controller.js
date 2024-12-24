import Order from "../models/Order_platform.js";

// Creating order
export const createOrder = async (req, res) => {
  try {
    // Extracting order data
    const { customerId, items, totalAmount, paymentId, paymentStatus } =
      req.body;

    if (!customerId || !items || !totalAmount || !paymentId || !paymentStatus) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Creatibg a order object
    const newOrder = new Order({
      customerId,
      items,
      totalAmount,
      paymentId,
      paymentStatus,
      orderDate: new Date(), //Date eka
    });

    const savedOrder = await newOrder.save();

    // Send a response back to the client
    res
      .status(201)
      .json({ message: "Order created successfully", order: savedOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
};
