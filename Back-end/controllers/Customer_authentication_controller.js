import CustomerAuthenticationModel from "../models/Customer_authentication_platform.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import validator from "validator";

//Seller login
const CustomerLogin = async (req, res) => {};

// Seller signup
const CustomerSignup = async (req, res) => {
  try {
    const {
      CustomerName,
      CustomerEmail,
      CustomerAddress,
      CustomerPhoneNumber,
      CustomerPassword,
    } = req.body;

    // Validate
    if (
      !CustomerName ||
      !CustomerEmail ||
      !CustomerPassword ||
      !CustomerAddress ||
      !CustomerPhoneNumber
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (!validator.isEmail(CustomerEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Check email
    const exists = await CustomerAuthenticationModel.findOne({ CustomerEmail });
    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered.",
      });
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(CustomerPassword, 10);

    const newCustomer = new CustomerAuthenticationModel({
      CustomerName,
      CustomerEmail,
      CustomerAddress,
      CustomerPhoneNumber,
      CustomerPassword: hashedPassword,
    });

    await newCustomer.save();

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

export { CustomerLogin, CustomerSignup };
