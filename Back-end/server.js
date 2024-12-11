import express from "express";
import multer from "multer";
import cors from "cors";
import { connectDB } from "./config/db.js";
import ECommerceRouter from "./routes/Product_add_routes.js";
import SellerAuthenticationRouter from "./routes/Seller_authentication_routes.js";
import CustomerAuthenticationRouter from "./routes/Customer_authentication_routes.js";
import AdmincontactRouter from "./routes/Admin_contact_routes.js";
import WishlistRouter from "./routes/Wish_list_routes.js";
import ProductDisplayRouter from "./routes/Seller_all_products_routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connection to MongoDB
connectDB();

// API Endpoints
//Product add
app.use("/api/ecommerceproduct", ECommerceRouter);
//Seller authentication
app.use("/api/sellerauthentication", SellerAuthenticationRouter);
//Seller authentication
app.use("/api/customerauthentication", CustomerAuthenticationRouter);
//Admin contact
app.use("/api/admincontact", AdmincontactRouter);
//Wish list
app.use("/api/wishlist", WishlistRouter);
// Product display
app.use("/api/products", ProductDisplayRouter);

app.get("/", (req, res) => {
  res.send("Good to go");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
