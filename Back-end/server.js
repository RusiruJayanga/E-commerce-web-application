import express from "express";
import multer from "multer";
import cors from "cors";
import { connectDB } from "./config/db.js";
import ECommerceRouter from "./routes/Product_add_routes.js";
import SellerAuthenticationRouter from "./routes/Seller_authentication_routes.js";
import CustomerAuthenticationRouter from "./routes/Customer_authentication_routes.js";
import AdmincontactRouter from "./routes/Admin_contact_routes.js";
import WishlistRouter from "./routes/Wish_list_routes.js";
import ProductDisplayRouter from "./routes/Seller_all_products_routes.js";
import Delete from "./routes/Seller_product_de_ed_routes.js";
import Update from "./routes/Product_edit_routes.js";
import Display from "./routes/Home_product_display_routes.js";
import PendingCartRouter from "./routes/Pending_cart_routes.js";
import Productdetails from "./routes/Product_details_routes.js";
import AskQuestionsRouter from "./routes/Ask_questions_routes.js";
import Questions from "./routes/Show_questions_routes.js";
import DisplayMen from "./routes/Men_product_display_routes.js";
import DisplayWomen from "./routes/Women_product_display_routes.js";
import DisplayHot from "./routes/Hot_product_display_routes.js";
import DisplayOffer from "./routes/Offer_product_display_routes.js";
import WishlistDisplay from "./routes/Wish_list_display_routes.js";
import AskQuestionReply from "./routes/Ask_questions_reply_route.js";
import Search from "./routes/Search_routes.js";
import OrderRouter from "./routes/Order_routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Connection to MongoDB
connectDB();

// API Endpoints
//Product add
app.use("/api/ecommerceproduct", ECommerceRouter);
//Product update
app.use("/api/ecommerceproductedit", Update);
//Seller authentication
app.use("/api/sellerauthentication", SellerAuthenticationRouter);
//Customer authentication
app.use("/api/customerauthentication", CustomerAuthenticationRouter);
//Admin contact
app.use("/api/admincontact", AdmincontactRouter);
//Wish list
app.use("/api/wishlist", WishlistRouter);
// Product seller display
app.use("/api/productssellerdisplay", ProductDisplayRouter);
// Product delete
app.use("/api/productsdelete", Delete);
// Product display
app.use("/api/productsdisplay", Display);
// Product men display
app.use("/api/productsdisplaymen", DisplayMen);
// Product women display
app.use("/api/productsdisplaywomen", DisplayWomen);
// Product hot display
app.use("/api/productsdisplayhot", DisplayHot);
// Product offer display
app.use("/api/productsdisplayoffers", DisplayOffer);
// Product add cart
app.use("/api/pendingcart", PendingCartRouter);
// Product details display
app.use("/api/productsdetailsdisplay", Productdetails);
// Product ask questions
app.use("/api/productsaskquestions", AskQuestionsRouter);
// Product show questions
app.use("/api/productsshowquestions", Questions);
// Product reply questions
app.use("/api/productsreplyquestions", AskQuestionReply);
// Wishlist display
app.use("/api/wishlistdisplay", WishlistDisplay);
// Search funtion
app.use("/api/productssearch", Search);
// Attach the router to your app
app.use("/api/sellers", SellerAuthenticationRouter);
app.use("/api/orders", OrderRouter);

app.get("/", (req, res) => {
  res.send("Good to go");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
