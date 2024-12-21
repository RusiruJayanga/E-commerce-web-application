import ECommerceModel from "../models/Product_add_platform.js";

const DisplayWomen = async (req, res) => {
  try {
    const { category } = req.query;

    // Add condition to only include products where ForWho is "Men"
    const query = { ForWho: "Women" };
    if (category) {
      query.Category = category; // Add category filter if provided
    }

    // Fetch products and populate seller details
    const products = await ECommerceModel.find(query).populate(
      "SellerID", // Field to populate
      "SellerName LogoImageFile" // Specific fields to fetch
    );

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products", error });
  }
};

export default DisplayWomen;
