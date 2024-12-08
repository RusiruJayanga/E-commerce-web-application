import mongoose from "mongoose";

const AdmincontactSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Message: { type: String, required: true },
});

const AdmincontactModel = mongoose.model("Admincontact", AdmincontactSchema);

export default AdmincontactModel;
