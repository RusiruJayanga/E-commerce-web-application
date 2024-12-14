import express from "express";
import { getProductById } from "../controllers/Product_details_controller.js";

const Productdetails = express.Router();

// Route to get product by ID
Productdetails.get("/:id", getProductById);

export default Productdetails;
