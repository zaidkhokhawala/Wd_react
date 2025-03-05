<<<<<<< HEAD
import React, { useState } from 'react';

function Crud() {
  // State to store product entries
  const [products, setProducts] = useState([]);
  
  // State to store form data
  const [formData, setFormData] = useState({
    date: '',
    propertyName: '',
    unitsAvailable: ''
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique ID using current timestamp
    const newProduct = { ...formData, id: Date.now().toString() };
    // Add new product to the list
    setProducts([...products, newProduct]);
    // Reset form fields
    setFormData({
      date: '',
      propertyName: '',
      unitsAvailable: ''
    });
  };

  return (
    <div className="admin-header">
      <div className="container my-4">
        <h2 className="text-center">Real Estate Property Dashboard</h2>
        <br />

        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })} // Update date field
                className="form-control"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="propertyName"
                value={formData.propertyName}
                onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })} // Update property name field
                className="form-control"
                placeholder="Property Name"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="unitsAvailable"
                value={formData.unitsAvailable}
                onChange={(e) => setFormData({ ...formData, unitsAvailable: e.target.value })} // Update units available field
                className="form-control"
                placeholder="Units Available"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>

        <h3 className="text-center mb-4">Property Entries</h3>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Property Name</th>
              <th>Units Available</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.date}</td>
                <td>{product.propertyName}</td>
                <td>{product.unitsAvailable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
=======
import React, { useState } from 'react';

function Crud() {
  // State to store product entries
  const [products, setProducts] = useState([]);
  
  // State to store form data
  const [formData, setFormData] = useState({
    date: '',
    propertyName: '',
    unitsAvailable: ''
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique ID using current timestamp
    const newProduct = { ...formData, id: Date.now().toString() };
    // Add new product to the list
    setProducts([...products, newProduct]);
    // Reset form fields
    setFormData({
      date: '',
      propertyName: '',
      unitsAvailable: ''
    });
  };

  return (
    <div className="admin-header">
      <div className="container my-4">
        <h2 className="text-center">Real Estate Property Dashboard</h2>
        <br />

        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })} // Update date field
                className="form-control"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="propertyName"
                value={formData.propertyName}
                onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })} // Update property name field
                className="form-control"
                placeholder="Property Name"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="unitsAvailable"
                value={formData.unitsAvailable}
                onChange={(e) => setFormData({ ...formData, unitsAvailable: e.target.value })} // Update units available field
                className="form-control"
                placeholder="Units Available"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>

        <h3 className="text-center mb-4">Property Entries</h3>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Property Name</th>
              <th>Units Available</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.date}</td>
                <td>{product.propertyName}</td>
                <td>{product.unitsAvailable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
