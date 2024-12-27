import express from "express";
import multer from "multer";
import { updateProduct } from "../controllers/Product_edit_platform_controller.js";

const Update = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

Update.put("/update/:id", upload.single("productimage"), updateProduct);

export default Update;
