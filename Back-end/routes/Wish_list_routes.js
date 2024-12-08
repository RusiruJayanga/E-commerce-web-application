import express from "express";
import { Wishlist } from "../controllers/Wish_list_controller.js";

const WishlistRouter = express.Router();

// Admin contact
WishlistRouter.post("/wishlistadd", Wishlist);

export default WishlistRouter;
