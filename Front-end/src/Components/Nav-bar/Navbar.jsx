import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav-bar.css";

const Navbar = () => {
  const [manu, set_manue] = useState("Home");
  const [menuOpen, set_menu_open] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem("token");
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
    localStorage.removeItem("token");
    localStorage.removeItem("customerId");
    setIsLoggedIn(false);
    setDropdownVisible(false);
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="Navbar">
      {/* Nav bar top section */}
      <div className="hedder-section">
        <div className="hedder">Green Shopping</div>
        <div className="hedder-right">
          <Link to="/Search">
            <img className="hedder-button" src="search-icon.png" alt="Search" />
          </Link>
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
                      to="/Account"
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
          <Link to="/Wish_list">
            <img className="hedder-button" src="wish-list.png" alt="Wishlist" />
          </Link>
          <Link to="/Cart">
            <img className="hedder-button" src="shopping-cart.png" alt="Cart" />
          </Link>
        </div>
      </div>

      <nav className="manu-section">
        {/* Nav bar responsive section */}
        <div
          className="menu-responsive"
          onClick={() => set_menu_open(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav bar menu section */}
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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
