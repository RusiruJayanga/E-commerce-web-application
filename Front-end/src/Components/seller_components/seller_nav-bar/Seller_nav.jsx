import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../Nav-bar/Nav-bar.css";

const Seller_nav = () => {
  const [manu, set_manue] = useState("Seller_home");
  const [menuOpen, set_menu_open] = useState(false);
  return (
    <div className="Navbar">
      {/* Nav bar top section */}
      <div className="hedder-section">
        <div className="hedder">Green Shopping</div>
        <div className="hedder-right">
          <Link to="/Seller_profile">
            <img className="hedder-button" src="user-account.png" alt="" />
          </Link>
        </div>
      </div>
      <nav className="manu-section">
        {/* Nav bsr responsive section */}
        <div
          className="menu-responsive"
          onClick={() => set_menu_open(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Nav bar manue section */}
        <ul className={menuOpen ? "open" : ""}>
          <li
            onClick={() => set_manue("Seller_home")}
            className={manu === "Seller_home" ? "active" : ""}
          >
            <NavLink to="/Seller_home">HOME</NavLink>
          </li>
          <li
            onClick={() => set_manue("Add_product")}
            className={manu === "Add_product" ? "active" : ""}
          >
            <NavLink to="/Add_product">ADD PRODUCT</NavLink>
          </li>
          <li
            onClick={() => set_manue("New_orders")}
            className={manu === "New_orders" ? "active" : ""}
          >
            <NavLink to="/New_orders">NEW ORDERS</NavLink>
          </li>
          <li
            onClick={() => set_manue("Delivered")}
            className={manu === "Delivered" ? "active" : ""}
          >
            <NavLink to="/Delivered">DELIVERED</NavLink>
          </li>
          <li
            onClick={() => set_manue("Chat")}
            className={manu === "Chat" ? "active" : ""}
          >
            <NavLink to="/Chat">CHAT</NavLink>
          </li>
        </ul>
        {}
      </nav>
      {}
    </div>
  );
};

export default Seller_nav;
