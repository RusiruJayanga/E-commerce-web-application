import ECommerceModel from "../models/Product_add_platform.js";

// Get products by category
const getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { Category: category } : {};
    const products = await ECommerceModel.find(query);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products", error });
  }
};

export default getProducts;
