<<<<<<< HEAD
// src/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Using useNavigate from react-router-dom
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUsers();
    }
  }, [user]);

  const fetchUsers = () => {
    setLoading(true);
    db.ref('users').on('value', (snapshot) => {
      const usersData = snapshot.val();
      const usersArray = usersData ? Object.keys(usersData).map(id => ({ id, ...usersData[id] })) : [];
      setUsers(usersArray);
      setLoading(false);
    });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      db.ref('users').push(newUser);
      setNewUser({ name: '', email: '' });
    }
  };

  const handleDeleteUser = (id) => {
    db.ref('users').child(id).remove();
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login'); // Using navigate instead of history.push
    });
  };

  if (!user) {
    return (
      <div>
        <h2>Please log in to view the dashboard</h2>
        <button onClick={() => navigate('/login')}>Go to Login</button> {/* Using navigate */}
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <button onClick={handleLogout}>Sign Out</button>

      <h2>User List</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default Dashboard;
=======
// src/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Using useNavigate from react-router-dom
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUsers();
    }
  }, [user]);

  const fetchUsers = () => {
    setLoading(true);
    db.ref('users').on('value', (snapshot) => {
      const usersData = snapshot.val();
      const usersArray = usersData ? Object.keys(usersData).map(id => ({ id, ...usersData[id] })) : [];
      setUsers(usersArray);
      setLoading(false);
    });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      db.ref('users').push(newUser);
      setNewUser({ name: '', email: '' });
    }
  };

  const handleDeleteUser = (id) => {
    db.ref('users').child(id).remove();
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login'); // Using navigate instead of history.push
    });
  };

  if (!user) {
    return (
      <div>
        <h2>Please log in to view the dashboard</h2>
        <button onClick={() => navigate('/login')}>Go to Login</button> {/* Using navigate */}
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <button onClick={handleLogout}>Sign Out</button>

      <h2>User List</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default Dashboard;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
