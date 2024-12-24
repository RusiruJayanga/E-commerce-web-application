import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customerauthentication",
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ecommerceproduct",
        required: true,
      },
      productName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, default: "Paid" },
  orderDate: { type: Date, default: Date.now },
  Status: {
    type: String,
    enum: ["processing", "shipped", "delivered"],
    default: "processing",
  },
});

export default mongoose.model("Order", orderSchema);
