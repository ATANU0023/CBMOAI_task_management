import React from 'react';
import { CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="circle"></span>    
        <h1>CBMO AI</h1>
      </div>
      <ul className="nav-links">
        <li>
        <CiHome  className="home-icon"/>
          <a href="#">Home</a>
        </li>
      </ul>
      <div className="right-section">
        <button className="button">AL</button>
        <span className="dropdown">
          Aldo
        </span>
        <a href="#" className="notification">
          <span className="bell"><IoIosNotificationsOutline />
          </span>
          <span className="notification-dot"></span>
        </a>
        <div className="profile">
          <img
            src="https://via.placeholder.com/30"  /* Demo profile image URL */
            alt="Profile"
            className="profile-icon"
          />
          <span className="profile-name">John Doe</span>  {/* Static name */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;