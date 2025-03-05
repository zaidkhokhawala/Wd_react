<<<<<<< HEAD
import React from 'react';
import AdminHeader from './components/AdminHeader';
import AdminFooter from './components/AdminFooter';
import AdminRoutes from './AdminRoutes'; // Import the routes for admin section

function AdminApp() {
  return (
    <>
      <AdminHeader /> {/* Admin header should be outside Routes */}
      <div className="admin-content">
        <AdminRoutes /> {/* Admin routes render the main content */}
      </div>
      <AdminFooter /> {/* Admin footer should also be outside Routes */}
    </>
  );
}

export default AdminApp;
=======
import React from 'react';
import AdminHeader from './components/AdminHeader';
import AdminFooter from './components/AdminFooter';
import AdminRoutes from './AdminRoutes'; // Import the routes for admin section

function AdminApp() {
  return (
    <>
      <AdminHeader /> {/* Admin header should be outside Routes */}
      <div className="admin-content">
        <AdminRoutes /> {/* Admin routes render the main content */}
      </div>
      <AdminFooter /> {/* Admin footer should also be outside Routes */}
    </>
  );
}

export default AdminApp;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
