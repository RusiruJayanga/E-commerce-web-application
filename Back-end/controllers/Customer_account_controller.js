import CustomerAuthenticationModel from "../models/Customer_authentication_platform.js";

// Get product by ID
export const getCustomeraccountbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const customeraccount = await CustomerAuthenticationModel.findById(id);

    if (!customeraccount) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json(customeraccount);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving account data", error });
  }
};
