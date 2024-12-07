import mongoose from "mongoose";

const CustomerauthenticationSchema = new mongoose.Schema({
  CustomerName: { type: String, required: true },
  CustomerEmail: { type: String, required: true, unique: true },
  CustomerAddress: { type: String, required: true },
  CustomerPhoneNumber: { type: String, required: true },
  CustomerPassword: { type: String, required: true },
});

const CustomerAuthenticationModel = mongoose.model(
  "customerauthentication",
  CustomerauthenticationSchema
);

export default CustomerAuthenticationModel;
