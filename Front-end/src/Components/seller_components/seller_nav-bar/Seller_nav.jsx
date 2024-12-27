import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../Nav-bar/Nav-bar.css";

const Seller_nav = () => {
  const [manu, set_manue] = useState("Seller_home");
  const [menuOpen, set_menu_open] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem("sellertoken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("sellertoken");
    localStorage.removeItem("sellerId");
    setIsLoggedIn(false);
    setDropdownVisible(false);
    navigate("/");
  };

  return (
    <div className="Navbar">
      {/* Nav bar top section */}
      <div className="hedder-section">
        <div className="hedder">Green Shopping</div>
        <div className="hedder-right">
          <div className="dropdown-container" onClick={toggleDropdown}>
            <img
              className="hedder-button"
              src="user-account.png"
              alt="Account"
            />
            {dropdownVisible && (
              <div className="dropdown-menu">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/Seller_profile"
                      onClick={() => setDropdownVisible(false)}
                    >
                      My Account
                    </Link>
                    <button className="logout-button" onClick={handleLogout}>
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/Login" onClick={() => setDropdownVisible(false)}>
                      Customer Account
                    </Link>
                    <Link
                      to="/Seller_login"
                      onClick={() => setDropdownVisible(false)}
                    >
                      Seller Account
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
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
