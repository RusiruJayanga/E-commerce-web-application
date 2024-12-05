import mongoose from "mongoose";

const ECommerceSchema = new mongoose.Schema({
  ProductName: { type: String, required: true },
  ShortDescription: { type: String, required: true },
  LongDescription: { type: String, required: true },
  Price: { type: Number, required: true },
  Discount: { type: Number },
  Advertise: { type: String, required: true },
  Quantity: { type: Number, required: true },
  ForWho: { type: String, required: true },
  Category: { type: String, required: true },
  ImageFile: { type: String, required: true },
});

const ECommerceModel =
  mongoose.model.ECommerce || mongoose.model("ECommerce", ECommerceSchema);

export default ECommerceModel;
