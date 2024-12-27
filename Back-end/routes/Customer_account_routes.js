import express from "express";
import { getCustomeraccountbyId } from "../controllers/Customer_account_controller.js";

const Customerdetails = express.Router();

Customerdetails.get("/:id", getCustomeraccountbyId);

export default Customerdetails;
