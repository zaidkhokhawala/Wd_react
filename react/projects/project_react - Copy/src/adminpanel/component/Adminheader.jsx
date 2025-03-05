<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Footer from '../../Comman/Footer';
import Headerbar from '../../Comman/Headerbar';

function AdminHeader() {
  const [propertyData, setPropertyData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    date: '',
    propertyName: '',
    unitsAvailable: '',
    unitsSold: '',
    cancelledBookings: '',
    totalRevenue: '',
    customerFeedback: '',
  });

  const fetchPropertyData = async () => {
    // Dummy data for initial state
    setPropertyData([
      { date: '2023-10-01', propertyName: 'Property A', unitsAvailable: 10, unitsSold: 5, cancelledBookings: 1, totalRevenue: 500000, customerFeedback: 'Positive' },
      // Add more dummy data as needed
    ]);
  };

  useEffect(() => {
    fetchPropertyData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      date: formData.date,
      propertyName: formData.propertyName,
      unitsAvailable: parseInt(formData.unitsAvailable) || 0,
      unitsSold: parseInt(formData.unitsSold) || 0,
      cancelledBookings: parseInt(formData.cancelledBookings) || 0,
      totalRevenue: parseInt(formData.totalRevenue) || 0,
      customerFeedback: formData.customerFeedback,
    };

    if (editMode) {
      const updatedEntries = [...propertyData];
      updatedEntries[editIndex] = newEntry;
      setPropertyData(updatedEntries);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setPropertyData([...propertyData, newEntry]);
    }

    // Reset form
    setFormData({
      date: '',
      propertyName: '',
      unitsAvailable: '',
      unitsSold: '',
      cancelledBookings: '',
      totalRevenue: '',
      customerFeedback: '',
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditMode(true);
    setFormData(propertyData[index]);
  };

  const handleDelete = (index) => {
    const updatedEntries = propertyData.filter((_, i) => i !== index);
    setPropertyData(updatedEntries);
  };

  return (
    <div className="admin-header">
      <Headerbar />
      <div className="container my-4">
        <h2 className="text-center">Real Estate Property Dashboard</h2>
        <br />

        <form onSubmit={handleSubmit} className="mb-4">
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
            {editMode ? 'Update Entry' : 'Submit'}
          </button>
        </form>

        <h3 className="text-center mb-4">Property Entries</h3>

        <table className="table table-striped">
          <thead >
            <tr className='mb-4'>
              <th>Date</th>
              <th>Property Name</th>
              <th>Units Available</th>
              <th>Units Sold</th>
              <th>Cancelled Bookings</th>
              <th>Total Revenue</th>
              <th>Customer Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {propertyData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.propertyName}</td>
                <td>{entry.unitsAvailable}</td>
                <td>{entry.unitsSold}</td>
                <td>{entry.cancelledBookings}</td>
                <td>${entry.totalRevenue}</td>
                <td>{entry.customerFeedback}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default AdminHeader;
=======
import React, { useState, useEffect } from 'react';
import Footer from '../../Comman/Footer';
import Headerbar from '../../Comman/Headerbar';

function AdminHeader() {
  const [propertyData, setPropertyData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    date: '',
    propertyName: '',
    unitsAvailable: '',
    unitsSold: '',
    cancelledBookings: '',
    totalRevenue: '',
    customerFeedback: '',
  });

  const fetchPropertyData = async () => {
    // Dummy data for initial state
    setPropertyData([
      { date: '2023-10-01', propertyName: 'Property A', unitsAvailable: 10, unitsSold: 5, cancelledBookings: 1, totalRevenue: 500000, customerFeedback: 'Positive' },
      // Add more dummy data as needed
    ]);
  };

  useEffect(() => {
    fetchPropertyData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      date: formData.date,
      propertyName: formData.propertyName,
      unitsAvailable: parseInt(formData.unitsAvailable) || 0,
      unitsSold: parseInt(formData.unitsSold) || 0,
      cancelledBookings: parseInt(formData.cancelledBookings) || 0,
      totalRevenue: parseInt(formData.totalRevenue) || 0,
      customerFeedback: formData.customerFeedback,
    };

    if (editMode) {
      const updatedEntries = [...propertyData];
      updatedEntries[editIndex] = newEntry;
      setPropertyData(updatedEntries);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setPropertyData([...propertyData, newEntry]);
    }

    // Reset form
    setFormData({
      date: '',
      propertyName: '',
      unitsAvailable: '',
      unitsSold: '',
      cancelledBookings: '',
      totalRevenue: '',
      customerFeedback: '',
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditMode(true);
    setFormData(propertyData[index]);
  };

  const handleDelete = (index) => {
    const updatedEntries = propertyData.filter((_, i) => i !== index);
    setPropertyData(updatedEntries);
  };

  return (
    <div className="admin-header">
      <Headerbar />
      <div className="container my-4">
        <h2 className="text-center">Real Estate Property Dashboard</h2>
        <br />

        <form onSubmit={handleSubmit} className="mb-4">
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
            {editMode ? 'Update Entry' : 'Submit'}
          </button>
        </form>

        <h3 className="text-center mb-4">Property Entries</h3>

        <table className="table table-striped">
          <thead >
            <tr className='mb-4'>
              <th>Date</th>
              <th>Property Name</th>
              <th>Units Available</th>
              <th>Units Sold</th>
              <th>Cancelled Bookings</th>
              <th>Total Revenue</th>
              <th>Customer Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {propertyData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.propertyName}</td>
                <td>{entry.unitsAvailable}</td>
                <td>{entry.unitsSold}</td>
                <td>{entry.cancelledBookings}</td>
                <td>${entry.totalRevenue}</td>
                <td>{entry.customerFeedback}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default AdminHeader;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
