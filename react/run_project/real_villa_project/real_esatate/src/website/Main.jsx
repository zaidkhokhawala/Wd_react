
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Properties from './Properties';
import Property_details from './Property_details';
import AdminApp from '../adminpanel/AdminApp'; // Correct import

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Property_details" element={<Property_details />} />
        <Route path="/Admin/*" element={<AdminApp />} /> {/* Admin Panel Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
