<<<<<<< HEAD
import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
      </li>
      <li class="nav-item">
      <NavLink className="nav-link " to="/About">About</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link " to="/Contact">Contact</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link " to="/">Home</NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
}

=======
import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
      </li>
      <li class="nav-item">
      <NavLink className="nav-link " to="/About">About</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link " to="/Contact">Contact</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link " to="/">Home</NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
export default Navbar