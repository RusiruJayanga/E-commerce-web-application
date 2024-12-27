import express from "express";
import { Wishlist } from "../controllers/Wish_list_controller.js";

const WishlistRouter = express.Router();

WishlistRouter.post("/wishlistadd", Wishlist);

export default WishlistRouter;
