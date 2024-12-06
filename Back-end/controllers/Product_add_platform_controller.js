import ECommerceModel from "../models/Product_add_platform.js";

// Add product
const AddProduct = async (req, res) => {
  let imageFileName = req.file?.filename || "default.jpg";

  const ECommerce = new ECommerceModel({
    SellerEmail: req.body.SellerEmail,
    ProductName: req.body.ProductName,
    ShortDescription: req.body.ShortDescription,
    LongDescription: req.body.LongDescription,
    Price: req.body.Price,
    Discount: req.body.Discount,
    Advertise: req.body.Advertise,
    Quantity: req.body.Quantity,
    ForWho: req.body.ForWho,
    Category: req.body.Category,
    ImageFile: imageFileName,
  });

  try {
    await ECommerce.save();
    res.json({ success: true, message: "Product is added" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "Failed to add product" });
  }
};

export { AddProduct };
