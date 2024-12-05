import ECommerceModel from "../models/E_commerce_platform.js";
import ECommerceRouter from "../routes/E_commerce_platform_routes.js";
import fs from "fs";

//Add product

const AddProductController = async (req, res) => {
  let image_flieName = `${req.file.filename}`;
  const ECommerce = new ECommerceModel({
    ProductName: req.body.ProductName,
    ShortDescription: req.body.ShortDescription,
    LongDescription: req.body.LongDescription,
    Price: req.body.Price,
    Discount: req.body.Discount,
    Advertise: req.body.Advertise,
    Quantity: req.body.Quantity,
    ForWho: req.body.ForWho,
    Category: req.body.Category,
    ImageFile: image_flieName,
  });
  try {
    await ECommerce.save();
    res.jason({ success: true, message: "Product is added" });
  } catch (error) {
    console.log(error);
    res.jason({ success: false, massage: "Failed" });
  }
};

export { AddProductController };
