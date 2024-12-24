import express from "express";
import sellerauthenticationrequest from "../models/Seller_authentication_platform.js";

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
SellerAuthenticationRouter.post("/sellerlogin", SellerLogin);

// Route to get all seller authentication requests
SellerAuthenticationRouter.get("/", async (req, res) => {
  try {
    const sellers = await sellerauthenticationrequest.find(); // Fetch all seller data
    res.json(sellers); // Send seller data as JSON response
  } catch (err) {
    console.error("Error fetching seller data: ", err);
    res.status(500).json({ message: "Error fetching seller data" });
  }
});

//Suresh - delete fucntion ,accoring to the relevant user "userid"
// In Seller_authentication_routes.js
// Define the delete route
SellerAuthenticationRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const seller = await sellerauthenticationrequest.findByIdAndDelete(id);
    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }
    res.status(200).json({ message: "Seller deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting seller" });
  }
});

//status...............
SellerAuthenticationRouter.put("/:id", async (req, res) => {
  const { status } = req.body;
  const validStatuses = ["accepted", "rejected", "pending"];

  // Check for invalid status
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    const updatedSeller = await sellerauthenticationrequest.findByIdAndUpdate(
      req.params.id,
      { $set: { Status: status } },
      { new: true }
    );

    if (!updatedSeller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.json(updatedSeller);
  } catch (error) {
    console.error("Error updating seller status:", error.message);
    res.status(500).json({ message: "Error updating status" });
  }
});

export default SellerAuthenticationRouter;
