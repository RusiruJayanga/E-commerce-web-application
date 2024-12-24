import mongoose from "mongoose";
//create schema for pendingcart/for cart
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
  Quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  ProductName: { type: String, required: true },
  Price: { type: Number, required: true },
  Discount: { type: Number, required: true },
  Category: { type: String, required: true },
  ImageFile: { type: String, required: true },
});

const PendingCartModel = mongoose.model("pendingcart", PendingCartSchema);

export default PendingCartModel;
