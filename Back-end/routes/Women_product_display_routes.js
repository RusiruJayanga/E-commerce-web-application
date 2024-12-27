import ECommerceModel from "../models/Product_add_platform.js";

// Add condition to only include products where ForWho is "Women"
const DisplayWomen = async (req, res) => {
  try {
    const { category } = req.query;

    const query = { ForWho: "Women" };
    if (category) {
      query.Category = category;
    }

    const products = await ECommerceModel.find(query).populate(
      "SellerID",
      "SellerName LogoImageFile"
    );

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products", error });
  }
};

export default DisplayWomen;
