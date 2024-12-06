import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import ECommerceRouter from "./routes/Product_add_routes.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Connection to MongoDB
connectDB();

// API Endpoints
app.use("/api/ecommerceproductadd", ECommerceRouter);

app.get("/", (req, res) => {
  res.send("Good to go");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
