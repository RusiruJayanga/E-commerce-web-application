import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import ECommerceRouter from "./routes/Product_add_routes.js";
import SellerAuthenticationRouter from "./routes/Seller_authentication_routes.js";
import CustomerAuthenticationRouter from "./routes/Customer_authentication_routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Connection to MongoDB
connectDB();

// API Endpoints
//Product add
app.use("/api/ecommerceproductadd", ECommerceRouter);
//Seller authentication
app.use("/api/sellerauthentication", SellerAuthenticationRouter);
//Seller authentication
app.use("/api/customerauthentication", CustomerAuthenticationRouter);

app.get("/", (req, res) => {
  res.send("Good to go");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
