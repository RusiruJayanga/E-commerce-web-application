import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customerauthentication",
    required: true,
  },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, default: "Paid" },
  orderDate: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
