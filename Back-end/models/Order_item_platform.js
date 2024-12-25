import mongoose from "mongoose";

// Order Item Schema (for each product)
const orderItemSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customerauthentication",
    required: true,
  },
  SellerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sellerauthenticationrequest",
    required: true,
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ecommerceproduct",
    required: true,
  },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["processing", "shipped", "delivered"],
    default: "processing",
  },
});

export default mongoose.model("OrderItem", orderItemSchema);
