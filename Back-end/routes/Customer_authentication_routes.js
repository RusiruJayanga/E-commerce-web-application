import express from "express";
import {
  CustomerLogin,
  CustomerSignup,
} from "../controllers/Customer_authentication_controller.js";

const CustomerAuthenticationRouter = express.Router();

// Customer signup
CustomerAuthenticationRouter.post("/customersignup", CustomerSignup);

// Customer login
CustomerAuthenticationRouter.post("/customerlogin", CustomerLogin);

export default CustomerAuthenticationRouter;
