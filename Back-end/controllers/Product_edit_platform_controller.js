import ECommerceModel from "../models/Product_add_platform.js";

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const {
    SellerID,
    ProductName,
    ShortDescription,
    LongDescription,
    Price,
    Discount,
    Advertise,
    Quantity,
    ForWho,
    Category,
  } = req.body;

  try {
    // Find the existing product
    const product = await ECommerceModel.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });
    }

    // Update fields
    product.SellerID = SellerID;
    product.ProductName = ProductName;
    product.ShortDescription = ShortDescription;
    product.LongDescription = LongDescription;
    product.Price = Price;
    product.Discount = Discount;
    product.Advertise = Advertise;
    product.Quantity = Quantity;
    product.ForWho = ForWho;
    product.Category = Category;

    // Update the image if a new one is uploaded
    if (req.file) {
      product.ImageFile = req.file.filename; // Store only the file name
    }

    // Save the updated product
    await product.save();

    res
      .status(200)
      .json({ success: true, message: "Product updated successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update product." });
  }
};

export { updateProduct };
