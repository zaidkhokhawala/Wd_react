
import React from 'react';

function Dashboard() {
  return (
    <div className="container mt-5">
    <h2>Add New Product</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">Product Name</label>
        <input type="text" className="form-control" id="productName" placeholder="Enter product name" />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">Product Price</label>
        <input type="number" className="form-control" id="productPrice" placeholder="Enter product price" />
      </div>
      <button type="submit" className="btn btn-success">Add Product</button>
    </form>
  </div>
  );
}

export default Dashboard;
