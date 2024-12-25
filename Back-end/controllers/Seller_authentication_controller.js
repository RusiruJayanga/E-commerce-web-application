import SellerAuthenticationModel from "../models/Seller_authentication_platform.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import validator from "validator";

// Helper function to generate a JWT
const generateToken = (sellerId) => {
  return jwt.sign({ id: sellerId }, process.env.JWT_SECRET || "secret", {
    expiresIn: "1h", // Token expires in 1 hour
  });
};

const SellerLogin = async (req, res) => {
  const { SellerEmail, SellerPassword } = req.body;

  // Validate input
  if (!SellerEmail || !SellerPassword) {
    console.log("Validation failed: Missing fields");
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  if (!validator.isEmail(SellerEmail)) {
    console.log("Validation failed: Invalid email format");
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  try {
    // Check if email exists
    const seller = await SellerAuthenticationModel.findOne({ SellerEmail });
    if (!seller) {
      console.log("Seller not found with email:", SellerEmail);
      return res.status(410).json({
        success: false,
        message: "Your email is not registered. Please register.",
      });
    }

    if (seller.Status === "rejected") {
      console.log("Seller account rejected:", SellerEmail);
      return res.status(403).json({
        success: false,
        message: "Your account has been rejected. Please contact support.",
      });
    }

    if (seller.Status === "pending") {
      console.log("Seller account pending:", SellerEmail);
      return res.status(403).json({
        success: false,
        message: "Your account is not approved yet. Please wait for approval.",
        additionalInfo:
          "You will receive a notification once your account is approved.",
      });
    }

    if (seller.Status !== "accepted") {
      console.log("Seller account not accepted:", SellerEmail);
      return res.status(403).json({
        success: false,
        message: "Your account is not yet approved. Please contact support.",
      });
    }

    // Validate password ,if the status is accepted
    const isMatch = await bcryptjs.compare(
      SellerPassword,
      seller.SellerPassword
    );
    if (!isMatch) {
      console.log("Password mismatch for seller:", SellerEmail);
      return res.status(410).json({
        success: false,
        message: "Your email or password is incorrect!",
      });
    }

    // Generate token for the seller
    const token = generateToken(seller._id);

    return res.status(200).json({
      success: true,
      message: "Login successful!",
      sellerId: seller._id, // Include seller ID in the response
      token, // Include the generated token
    });
  } catch (error) {
    console.error("Error during seller login:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to login.",
    });
  }
};

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

    // Validate input
    if (
      !SellerName ||
      !SellerEmail ||
      !SellerPassword ||
      !SellerAddress ||
      !SellerPhoneNumber ||
      !SellerDescription ||
      !SellerGeolocation
    ) {
      console.log("Validation failed: Missing fields");
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (!validator.isEmail(SellerEmail)) {
      console.log("Validation failed: Invalid email format");
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Check if email is already registered
    const exists = await SellerAuthenticationModel.findOne({ SellerEmail });
    if (exists) {
      console.log("Email already registered:", SellerEmail);
      return res.status(409).json({
        success: false,
        message: "Email is already registered.",
      });
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(SellerPassword, 10);

    // Create a new seller
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
    console.log("Seller account created");

    return res.status(201).json({
      success: true,
      message: "Signup successful!",
    });
  } catch (error) {
    console.error("Error during seller signup:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to signup.",
    });
  }
};

export { SellerLogin, SellerSignup };
