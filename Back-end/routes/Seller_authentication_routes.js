import express from "express";
import {
  SellerLogin,
  SellerSignup,
} from "../controllers/Seller_authentication_controller.js";
import multer from "multer";

const SellerAuthenticationRouter = express.Router();

// Image storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// File validation
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

// Seller signup
SellerAuthenticationRouter.post(
  "/sellersignup",
  upload.single("logoimage"),
  SellerSignup
);

// Seller login
SellerAuthenticationRouter.post("/Sellerlogin", SellerLogin);

export default SellerAuthenticationRouter;
