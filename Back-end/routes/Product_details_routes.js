import express from "express";
import { getProductById } from "../controllers/Product_details_controller.js";

const Productdetails = express.Router();

Productdetails.get("/:id", getProductById);

export default Productdetails;
