import express from "express";
import { AddProduct } from "../controllers/Product_add_platform_controller.js";
import multer from "multer";

const ECommerceRouter = express.Router();

// Image storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// File filter for validation
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(
        new Error("Invalid file type. Only JPEG, PNG, and GIF are allowed.")
      );
    }
    cb(null, true);
  },
});

// Route for adding a product
ECommerceRouter.post("/add", upload.single("image"), AddProduct);

export default ECommerceRouter;
