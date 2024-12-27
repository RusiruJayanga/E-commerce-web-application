import express from "express";
import {
  CustomerLogin,
  CustomerSignup,
} from "../controllers/Customer_authentication_controller.js";

const CustomerAuthenticationRouter = express.Router();

CustomerAuthenticationRouter.post("/customersignup", CustomerSignup);

CustomerAuthenticationRouter.post("/customerlogin", CustomerLogin);

export default CustomerAuthenticationRouter;
