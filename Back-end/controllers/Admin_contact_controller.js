import AdmincontactModel from "../models/Admin_contact_platform.js";
import validator from "validator";

// Admin contact
const Admincontact = async (req, res) => {
  try {
    const { Name, Email, Message } = req.body;

    // Validate
    if (!Name || !Email || !Message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (!validator.isEmail(Email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    const newAdmincontact = new AdmincontactModel({
      Name,
      Email,
      Message,
    });

    await newAdmincontact.save();

    res.status(201).json({
      success: true,
      message: "Message send successful!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Message failed to send.",
    });
  }
};

export { Admincontact };
