import express from "express";
import multer from "multer";
import { updateProduct } from "../controllers/Product_edit_platform_controller.js";

const Update = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in the "uploads" directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Save only the file name
  },
});

const upload = multer({ storage });

Update.put("/update/:id", upload.single("productimage"), updateProduct);

export default Update;
