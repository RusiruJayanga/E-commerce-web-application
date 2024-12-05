import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Nav-bar/Nav-bar.css";

const Log_sign_navbar = () => {
  const [manu, set_manue] = useState("Seller_home");
  const [menuOpen, set_menu_open] = useState(false);
  return (
    <div className="Navbar">
      {/* Nav bar top section */}
      <div className="hedder-section">
        <div className="hedder">Green Shopping</div>
        <div className="hedder-right"></div>
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
            onClick={() => set_manue("Customer_account")}
            className={manu === "Customer_account" ? "" : ""}
          >
            <NavLink to="/Customer_login ">CUSTOMER ACCOUNT</NavLink>
          </li>
          <li
            onClick={() => set_manue("Seller_account")}
            className={manu === "Seller_account" ? "" : ""}
          >
            <NavLink to="/Seller_login">SELLER ACCOUNT</NavLink>
          </li>
        </ul>
        {}
      </nav>
      {}
    </div>
  );
};

export default Log_sign_navbar;
