
import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/dashboard">Admin Panel</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-product">Add Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manage-product">Manage Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;
