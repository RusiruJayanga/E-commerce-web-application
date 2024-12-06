import express from "express";
import { AddProduct } from "../controllers/E_commerce_platform_controller.js";
import multer from "multer";

const ECommerceRouter = express.Router();

//Image storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

ECommerceRouter.post("/add", upload.single("image"), AddProduct);

export default ECommerceRouter;
