import express from "express";
import { getSelleraccountbyId } from "../controllers/Seller_account_controller.js";

const Sellerdetails = express.Router();

Sellerdetails.get("/:id", getSelleraccountbyId);

export default Sellerdetails;
