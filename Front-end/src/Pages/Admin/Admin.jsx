import React from "react";
import AdminNavbar from "./AdminNavigationBar";
import { Outlet } from "react-router-dom"; 
import "./AdminNavBar.css";
import "./Admindashboard.css"; 

const Admin = () => {
  return (
    <div className="admin-page-wrapper">
      
      <AdminNavbar />

      <div className="admin-dashboard-wrapper">
        <aside className="admin-sidebar-section">
          <h2 className="admin-sidebar-title">Quick Actions</h2>
          <ul className="admin-sidebar-list">
            <li className="admin-sidebar-item">
              <a href="/admin/sellerdetails" className="admin-sidebar-link">
                Manage Sellers
              </a>
            </li>
            <li className="admin-sidebar-item">
              <a href="/admin/customerdetails" className="admin-sidebar-link">
                Manage Customers
              </a>
            </li>
            <li className="admin-sidebar-item">
              <a href="/admin/orderdetails" className="admin-sidebar-link">
                Manage Orders
              </a>
            </li>
          </ul>
        </aside>

        <main className="admin-main-content-section">
          <h1 className="admin-main-title">Welcome to the Admin Dashboard</h1>
          <div className="admin-stats-container">
            <div className="admin-stat-card admin-stat-sellers">
              <h3 className="admin-stat-title">Total Sellers</h3>
              <p className="admin-stat-value">124</p>
            </div>
            <div className="admin-stat-card admin-stat-customers">
              <h3 className="admin-stat-title">Total Customers</h3>
              <p className="admin-stat-value">452</p>
            </div>
            <div className="admin-stat-card admin-stat-orders">
              <h3 className="admin-stat-title">Total Orders</h3>
              <p className="admin-stat-value">237</p>
            </div>
          </div>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Admin;
