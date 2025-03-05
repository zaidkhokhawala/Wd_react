<<<<<<< HEAD
import React, { useState } from 'react';





function Crud() {
  const [formData, setFormData] = useState({
    date: '',
    propertyName: '',
    unitsAvailable: '',
    unitsSold: '',
    cancelledBookings: '',
    totalRevenue: '',
    customerFeedback: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({
      date: '',
      propertyName: '',
      unitsAvailable: '',
      unitsSold: '',
      cancelledBookings: '',
      totalRevenue: '',
      customerFeedback: ''
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
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
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
                onChange={handleChange}
                className="form-control"
                placeholder="Units Available"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="unitsSold"
                value={formData.unitsSold}
                onChange={handleChange}
                className="form-control"
                placeholder="Units Sold"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="cancelledBookings"
                value={formData.cancelledBookings}
                onChange={handleChange}
                className="form-control"
                placeholder="Cancelled Bookings"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="totalRevenue"
                value={formData.totalRevenue}
                onChange={handleChange}
                className="form-control"
                placeholder="Total Revenue"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="customerFeedback"
                value={formData.customerFeedback}
                onChange={handleChange}
                className="form-control"
                placeholder="Customer Feedback"
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
              <th>Date</th>
              <th>Property Name</th>
              <th>Units Available</th>
              <th>Units Sold</th>
              <th>Cancelled Bookings</th>
              <th>Total Revenue</th>
              <th>Customer Feedback</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.date}</td>
                <td>{product.propertyName}</td>
                <td>{product.unitsAvailable}</td>
                <td>{product.unitsSold}</td>
                <td>{product.cancelledBookings}</td>
                <td>{product.totalRevenue}</td>
                <td>{product.customerFeedback}</td>
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
  const [formData, setFormData] = useState({
    date: '',
    propertyName: '',
    unitsAvailable: '',
    unitsSold: '',
    cancelledBookings: '',
    totalRevenue: '',
    customerFeedback: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({
      date: '',
      propertyName: '',
      unitsAvailable: '',
      unitsSold: '',
      cancelledBookings: '',
      totalRevenue: '',
      customerFeedback: ''
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
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
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
                onChange={handleChange}
                className="form-control"
                placeholder="Units Available"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="unitsSold"
                value={formData.unitsSold}
                onChange={handleChange}
                className="form-control"
                placeholder="Units Sold"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="cancelledBookings"
                value={formData.cancelledBookings}
                onChange={handleChange}
                className="form-control"
                placeholder="Cancelled Bookings"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                name="totalRevenue"
                value={formData.totalRevenue}
                onChange={handleChange}
                className="form-control"
                placeholder="Total Revenue"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="customerFeedback"
                value={formData.customerFeedback}
                onChange={handleChange}
                className="form-control"
                placeholder="Customer Feedback"
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
              <th>Date</th>
              <th>Property Name</th>
              <th>Units Available</th>
              <th>Units Sold</th>
              <th>Cancelled Bookings</th>
              <th>Total Revenue</th>
              <th>Customer Feedback</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.date}</td>
                <td>{product.propertyName}</td>
                <td>{product.unitsAvailable}</td>
                <td>{product.unitsSold}</td>
                <td>{product.cancelledBookings}</td>
                <td>{product.totalRevenue}</td>
                <td>{product.customerFeedback}</td>
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
