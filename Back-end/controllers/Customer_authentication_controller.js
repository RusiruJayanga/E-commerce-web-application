import CustomerAuthenticationModel from "../models/Customer_authentication_platform.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import validator from "validator";

// Customer login
const CustomerLogin = async (req, res) => {
  const { CustomerEmail, CustomerPassword } = req.body;

  // Validate input fields
  if (!CustomerEmail || !CustomerPassword) {
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

  try {
    // Check if the email exists
    const logexists = await CustomerAuthenticationModel.findOne({
      CustomerEmail,
    });

    if (!logexists) {
      return res.status(410).json({
        success: false,
        message: "Your email is not registered. Please register.",
      });
    }

    // Compare password
    const isMatch = await bcryptjs.compare(
      CustomerPassword,
      logexists.CustomerPassword
    );

    if (!isMatch) {
      return res.status(410).json({
        success: false,
        message: "Your email or password is incorrect!",
      });
    }

    // Token
    const token = jwt.sign(
      { id: logexists._id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" }
    );

    // Send customer ID
    return res.status(200).json({
      success: true,
      message: "Login successful!",
      customerId: logexists._id, // Include _id in the response
      token, // Optionally include the token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to login.",
    });
  }
};

// Customer signup
const CustomerSignup = async (req, res) => {
  try {
    const {
      CustomerName,
      CustomerEmail,
      CustomerAddress,
      CustomerPhoneNumber,
      CustomerPassword,
    } = req.body;

    // Validate input fields
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

    // Check if the email is already registered
    const exists = await CustomerAuthenticationModel.findOne({ CustomerEmail });
    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered.",
      });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(CustomerPassword, 10);

    // Create a new customer
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
