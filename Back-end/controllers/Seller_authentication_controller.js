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

// Seller login
const SellerLogin = async (req, res) => {
  const { SellerEmail, SellerPassword } = req.body;

  // Validate input
  if (!SellerEmail || !SellerPassword) {
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

  try {
    // Check if email exists
    const seller = await SellerAuthenticationModel.findOne({ SellerEmail });

    if (!seller) {
      return res.status(410).json({
        success: false,
        message: "Your email is not registered. Please register.",
      });
    }

    // Validate password
    const isMatch = await bcryptjs.compare(
      SellerPassword,
      seller.SellerPassword
    );

    if (!isMatch) {
      return res.status(410).json({
        success: false,
        message: "Your email or password is incorrect!",
      });
    }

    // Generate token for the seller
    const token = jwt.sign(
      { id: seller._id }, // Include seller ID in the token payload
      process.env.JWT_SECRET || "secret", // Use environment variable or fallback
      { expiresIn: "1h" } // Set token expiration time
    );

    return res.status(200).json({
      success: true,
      message: "Login successful!",
      sellerId: seller._id, // Include seller ID in the response
      token, // Include the generated token
    });
  } catch (error) {
    console.error(error.message);
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

    // Check if email is already registered
    const exists = await SellerAuthenticationModel.findOne({ SellerEmail });
    if (exists) {
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

    // Generate token for the new seller
    const token = jwt.sign(
      { id: newSeller._id }, // Include seller ID in the token payload
      process.env.JWT_SECRET || "secret", // Use environment variable or fallback
      { expiresIn: "1h" } // Set token expiration time
    );

    res.status(201).json({
      success: true,
      message: "Signup successful!",
      sellerId: newSeller._id, // Include the seller ID in the response
      token, // Include the generated token
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
