import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminNavBar.css";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul className="navbar-links">
        <li>
          <NavLink to="/Admin/sellerdetails" activeClassName="active-link">
            Seller Details
          </NavLink>
        </li>
        <li>
          <NavLink to="/Admin/sellerdetails" activeClassName="active-link">
            Customer Details
          </NavLink>
        </li>
        <li>
          <NavLink to="/Admin/sellererdetails" activeClassName="active-link">
            Order Details
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default AdminNavbar;
