import mongoose from "mongoose";

const SellerauthenticationSchema = new mongoose.Schema({
  SellerName: { type: String, required: true },
  SellerEmail: { type: String, required: true, unique: true },
  SellerAddress: { type: String, required: true },
  SellerPhoneNumber: { type: String, required: true },
  SellerGeolocation: { type: String, required: true },
  SellerDescription: { type: String, required: true },
  SellerPassword: { type: String, required: true },
  LogoImageFile: { type: String, required: true },
});

const SellerAuthenticationModel = mongoose.model(
  "sellerauthenticationrequest",
  SellerauthenticationSchema
);

export default SellerAuthenticationModel;
