import SellerAuthenticationModel from "../models/Seller_authentication_platform.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import validator from "validator";

//Seller login
const SellerLogin = async (req, res) => {};

// Seller signup
const SellerSignup = async (req, res) => {
  const imageFileName = req.file?.filename || "default.jpg";

  try {
    const {
      SellerName,
      SellerEmail,
      SellerAddress,
      SellerPhoneNumber,
      SellerGeolocation,
      SellerDescription,
      SellerPassword,
    } = req.body;

    // Validate
    if (
      !SellerName ||
      !SellerEmail ||
      !SellerPassword ||
      !SellerAddress ||
      !SellerPhoneNumber ||
      !SellerDescription ||
      !SellerGeolocation
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (!validator.isEmail(SellerEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Check email
    const exists = await SellerAuthenticationModel.findOne({ SellerEmail });
    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered.",
      });
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(SellerPassword, 10);

    const newSeller = new SellerAuthenticationModel({
      SellerName,
      SellerEmail,
      SellerAddress,
      SellerPhoneNumber,
      SellerGeolocation,
      SellerDescription,
      SellerPassword: hashedPassword,
      LogoImageFile: imageFileName,
    });

    await newSeller.save();

    res.status(201).json({
      success: true,
      message: "Signup successful!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Failed to signup.",
    });
  }
};

export { SellerLogin, SellerSignup };
