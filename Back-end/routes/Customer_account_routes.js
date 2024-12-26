import express from "express";
import { getCustomeraccountbyId } from "../controllers/Customer_account_controller.js";

const Customerdetails = express.Router();

// Route to get product by ID
Customerdetails.get("/:id", getCustomeraccountbyId);

export default Customerdetails;
