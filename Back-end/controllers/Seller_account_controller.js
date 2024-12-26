import SellerAuthenticationModel from "../models/Seller_authentication_platform.js";

// Get product by ID
export const getSelleraccountbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const selleraccount = await SellerAuthenticationModel.findById(id);

    if (!selleraccount) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.status(200).json(selleraccount);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving account data", error });
  }
};
