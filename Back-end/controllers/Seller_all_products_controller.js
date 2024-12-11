import ECommerceModel from "../models/Product_add_platform";

// Controller to fetch all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await ECommerceModel.find(); // Fetch all products
    res.status(200).json(products); // Send products as JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};
