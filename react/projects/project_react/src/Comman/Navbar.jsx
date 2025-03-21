
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container-fluid">
      <ul className="nav maincss">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Properties">Properties</NavLink></li>
        <li><NavLink to="/Property_details">Property Details</NavLink></li>
        <li><NavLink to="/Contact">Contact Us</NavLink></li>
        <li><NavLink to="/Admin">Login</NavLink></li> {/* Updated Link */}
        <li><a href="#"><i className="fa fa-calendar" /> Schedule a visit</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
