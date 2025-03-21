
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import ManageProduct from './pages/ManageProduct';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route path="/admin/manage-product" element={<ManageProduct />} />
    </Routes>
  );
}

export default AdminRoutes;
