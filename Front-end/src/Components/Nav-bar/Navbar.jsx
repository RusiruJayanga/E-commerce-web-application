import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav-bar.css";

const Navbar = () => {
  const [manu, set_manue] = useState("Home");
  const [menuOpen, set_menu_open] = useState(false);
  return (
    <div className="Navbar">
      {/* Nav bar top section */}
      <div className="hedder-section">
        <div className="hedder">Green Shopping</div>
        <div className="hedder-right">
          <Link to="/Search">
            <img className="hedder-button" src="search-icon.png" alt="" />
          </Link>
          <Link to="/Account">
            <img className="hedder-button" src="user-account.png" alt="" />
          </Link>
          <Link to="/Wish_list">
            <img className="hedder-button" src="wish-list.png" alt="" />
          </Link>
          <Link to="/Cart">
            <img className="hedder-button" src="shopping-cart.png" alt="" />
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
            onClick={() => set_manue("Home")}
            className={manu === "Home" ? "active" : ""}
          >
            <NavLink to="/">HOME</NavLink>
          </li>
          <li
            onClick={() => set_manue("Men")}
            className={manu === "Men" ? "active" : ""}
          >
            <NavLink to="/Men">MEN</NavLink>
          </li>
          <li
            onClick={() => set_manue("Women")}
            className={manu === "Women" ? "active" : ""}
          >
            <NavLink to="/Women">WOMEN</NavLink>
          </li>
          <li
            onClick={() => set_manue("Offers")}
            className={manu === "Offers" ? "active" : ""}
          >
            <NavLink to="/Offers">OFFERS</NavLink>
          </li>
          <li
            onClick={() => set_manue("Hot")}
            className={manu === "Hot" ? "active" : ""}
          >
            <NavLink to="/Hot">HOT</NavLink>
          </li>
          <li
            onClick={() => set_manue("Contact")}
            className={manu === "Contact" ? "active" : ""}
          >
            <NavLink to="/Contact">CONTACT</NavLink>
          </li>
        </ul>
        {}
      </nav>
      {}
    </div>
  );
};

export default Navbar;
