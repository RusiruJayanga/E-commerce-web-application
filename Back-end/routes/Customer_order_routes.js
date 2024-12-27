import express from "express";
import getOrdersByCustomerId from "../controllers/Customer_order_controller.js";

const Orderscustomer = express.Router();

Orderscustomer.get("/orders", getOrdersByCustomerId);

export default Orderscustomer;
