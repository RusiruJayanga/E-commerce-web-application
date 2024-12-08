import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema({
  CustomerID: { type: String, required: true },
  ProductID: { type: String, required: true },
});

const WishlistModel = mongoose.model("Wishlist", WishlistSchema);

export default WishlistModel;
