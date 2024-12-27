import Order from "../models/Order_platform.js";
import OrderItem from "../models/Order_item_platform.js";
import ECommerceModel from "../models/Product_add_platform.js";

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
        customerId,
        SellerID: product.SellerID,
        orderId: savedOrder._id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        status: "processing",
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
