<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const API_URL = 'http://localhost:5000/users';

  // Fetch all users
  useEffect(() => {
    setLoading(true); // Start loading
    axios.get(API_URL)
      .then((response) => {
        setUsers(response.data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        setError('Error fetching users');
        setLoading(false); // Stop loading even if there is an error
      });
  }, []);

  // Handle Create (POST)
  const handleAddUser = () => {
    setLoading(true);
    axios.post(API_URL, newUser)
      .then((response) => {
        setUsers([...users, response.data]);
        setNewUser({ name: '', email: '' }); // Clear the form after adding
        setLoading(false);
      })
      .catch((error) => {
        setError('Error adding user');
        setLoading(false);
      });
  };

  // Handle Edit (PUT)
  const handleEditUser = () => {
    setLoading(true);
    axios.put(`${API_URL}/${editUser.id}`, editUser)
      .then((response) => {
        const updatedUsers = users.map((user) =>
          user.id === response.data.id ? response.data : user
        );
        setUsers(updatedUsers);
        setEditUser(null); // Clear the edit form
        setLoading(false);
      })
      .catch((error) => {
        setError('Error editing user');
        setLoading(false);
      });
  };

  // Handle Delete (DELETE)
  const handleDeleteUser = (id) => {
    setLoading(true);
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
        setLoading(false);
      })
      .catch((error) => {
        setError('Error deleting user');
        setLoading(false);
      });
  };

  // Handle Patch (PATCH)
  const handlePatchUser = (id) => {
    setLoading(true);
    axios.patch(`${API_URL}/${id}`, { name: 'Updated Name' })
      .then((response) => {
        const updatedUsers = users.map((user) =>
          user.id === response.data.id ? response.data : user
        );
        setUsers(updatedUsers);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error updating user');
        setLoading(false);
      });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">CRUD Operations with JSON Server</h1>

      {/* Loading State */}
      {loading && <div className="text-center"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>}

      {/* Error Message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Display all users */}
      <h2 className="my-4">Users List</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{user.name} - {user.email}</span>
            <div>
              <button className="btn btn-warning btn-sm mx-1" onClick={() => setEditUser(user)}>Edit</button>
              <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDeleteUser(user.id)}>Delete</button>
              <button className="btn btn-primary btn-sm mx-1" onClick={() => handlePatchUser(user.id)}>Update Name</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add New User */}
      <h2 className="my-4">Add New User</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
      </div>
      <button className="btn btn-success" onClick={handleAddUser}>Add User</button>

      {/* Edit User */}
      {editUser && (
        <div className="mt-4">
          <h2>Edit User</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={editUser.name}
              onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={editUser.email}
              onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
            />
          </div>
          <button className="btn btn-primary" onClick={handleEditUser}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default App;
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const API_URL = 'http://localhost:5000/users';

  // Fetch all users
  useEffect(() => {
    setLoading(true); // Start loading
    axios.get(API_URL)
      .then((response) => {
        setUsers(response.data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        setError('Error fetching users');
        setLoading(false); // Stop loading even if there is an error
      });
  }, []);

  // Handle Create (POST)
  const handleAddUser = () => {
    setLoading(true);
    axios.post(API_URL, newUser)
      .then((response) => {
        setUsers([...users, response.data]);
        setNewUser({ name: '', email: '' }); // Clear the form after adding
        setLoading(false);
      })
      .catch((error) => {
        setError('Error adding user');
        setLoading(false);
      });
  };

  // Handle Edit (PUT)
  const handleEditUser = () => {
    setLoading(true);
    axios.put(`${API_URL}/${editUser.id}`, editUser)
      .then((response) => {
        const updatedUsers = users.map((user) =>
          user.id === response.data.id ? response.data : user
        );
        setUsers(updatedUsers);
        setEditUser(null); // Clear the edit form
        setLoading(false);
      })
      .catch((error) => {
        setError('Error editing user');
        setLoading(false);
      });
  };

  // Handle Delete (DELETE)
  const handleDeleteUser = (id) => {
    setLoading(true);
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
        setLoading(false);
      })
      .catch((error) => {
        setError('Error deleting user');
        setLoading(false);
      });
  };

  // Handle Patch (PATCH)
  const handlePatchUser = (id) => {
    setLoading(true);
    axios.patch(`${API_URL}/${id}`, { name: 'Updated Name' })
      .then((response) => {
        const updatedUsers = users.map((user) =>
          user.id === response.data.id ? response.data : user
        );
        setUsers(updatedUsers);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error updating user');
        setLoading(false);
      });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">CRUD Operations with JSON Server</h1>

      {/* Loading State */}
      {loading && <div className="text-center"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>}

      {/* Error Message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Display all users */}
      <h2 className="my-4">Users List</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{user.name} - {user.email}</span>
            <div>
              <button className="btn btn-warning btn-sm mx-1" onClick={() => setEditUser(user)}>Edit</button>
              <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDeleteUser(user.id)}>Delete</button>
              <button className="btn btn-primary btn-sm mx-1" onClick={() => handlePatchUser(user.id)}>Update Name</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add New User */}
      <h2 className="my-4">Add New User</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
      </div>
      <button className="btn btn-success" onClick={handleAddUser}>Add User</button>

      {/* Edit User */}
      {editUser && (
        <div className="mt-4">
          <h2>Edit User</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={editUser.name}
              onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={editUser.email}
              onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
            />
          </div>
          <button className="btn btn-primary" onClick={handleEditUser}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default App;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
