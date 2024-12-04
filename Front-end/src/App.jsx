import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nav-bar/Navbar";
import Home from "./Pages/home/Home";
import Men from "./Pages/men/Men";
import Women from "./Pages/women/Women";
import Offers from "./Pages/offers/Offers";
import Hot from "./Pages/hot/Hot";
import Wish_list from "./Pages/wish_list/Wish_list";
import Cart from "./Pages/cart/Cart";
import Account from "./Pages/account/Account";
import Search from "./Pages/search_page/Search_page";
import Contact from "./Pages/contact/Contact";
import Product_details from "./Pages/product_details/Product_details";
import Seller_nav from "./Components/seller_components/seller_nav-bar/Seller_nav";
import Add_product from "./Pages/seller/add_product/Add_product";
import Seller_home from "./Pages/seller/seller_home/Seller_home";
import Chat from "./Pages/seller/chat/Chat";
import New_orders from "./Pages/seller/new_orders/New_orders";
import Delivered from "./Pages/seller/delivered/Delivered";
import Seller_profile from "./Pages/seller/seller_profile/Seller_profile";

const App = () => {
  return (
    <div className="App">
      {/* Nav bar */}
      <Routes>
        {[
          "",
          "Men",
          "Women",
          "Offers",
          "Hot",
          "Contact",
          "Wish_list",
          "Cart",
          "Accoun",
          "Search",
          "Product_details",
        ].map((path) => (
          <Route path={path} element={<Navbar />} />
        ))}
        {/* Nav bar */}
        {[
          "Account",
          "Add_product",
          "Seller_home",
          "Chat",
          "New_orders",
          "Delivered",
          "Seller_profile",
          "",
          "",
          "",
          "",
        ].map((path) => (
          <Route path={path} element={<Seller_nav />} />
        ))}
      </Routes>
      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Hot" element={<Hot />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Wish_list" element={<Wish_list />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Account" element={<Seller_home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Product_details" element={<Product_details />} />
        <Route path="/Add_product" element={<Add_product />} />
        <Route path="/Seller_home" element={<Seller_home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/New_orders" element={<New_orders />} />
        <Route path="/Delivered" element={<Delivered />} />
        <Route path="/Seller_profile" element={<Seller_profile />} />
      </Routes>
    </div>
  );
};

export default App;
