<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from the JSONPlaceholder API using fetch()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())  // Parsing the response as JSON
      .then((data) => {
        setUsers(data);  // Storing the data in state
      })
      .catch((err) => {
        console.error('Failed to fetch data', err);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td> {/* Displaying user ID */}
              <td>{user.name}</td> {/* Displaying user Name */}
              <td>{user.email}</td> {/* Displaying user Email */}
              <td>{user.phone}</td> {/* Displaying user Phone */}
              <td>{user.website}</td> {/* Displaying user Website */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
=======
import React, { useState, useEffect } from 'react';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from the JSONPlaceholder API using fetch()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())  // Parsing the response as JSON
      .then((data) => {
        setUsers(data);  // Storing the data in state
      })
      .catch((err) => {
        console.error('Failed to fetch data', err);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td> {/* Displaying user ID */}
              <td>{user.name}</td> {/* Displaying user Name */}
              <td>{user.email}</td> {/* Displaying user Email */}
              <td>{user.phone}</td> {/* Displaying user Phone */}
              <td>{user.website}</td> {/* Displaying user Website */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
