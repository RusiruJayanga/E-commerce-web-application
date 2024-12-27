import express from "express";
import { Admincontact } from "../controllers/Admin_contact_controller.js";

const AdmincontactRouter = express.Router();

AdmincontactRouter.post("/admincsendmessege", Admincontact);

export default AdmincontactRouter;
