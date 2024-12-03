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
import Seller_navbar from "./Components/seller_components/seller_nav-bar/Seller_nav-bar";
import Add_product from "./Pages/seller/add_product/Add_product";

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
        {["Account", "Add_product", "", "", "", "", "", "", "", "", ""].map(
          (path) => (
            <Route path={path} element={<Seller_navbar />} />
          )
        )}
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
        <Route path="/Account" element={<Account />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Product_details" element={<Product_details />} />
        <Route path="/Add_product" element={<Add_product />} />
      </Routes>
    </div>
  );
};

export default App;
