import mongoose from "mongoose";

const PendingCartSchema = new mongoose.Schema({
  CustomerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customerauthentication",
    required: true,
  },
  ProductID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ecommerceproduct",
    required: true,
  },
  Quantity: { type: Number, required: true },
});

const PendingCartModel = mongoose.model("pendingcart", PendingCartSchema);

export default PendingCartModel;
