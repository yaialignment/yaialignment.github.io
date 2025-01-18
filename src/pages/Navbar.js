import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Notificationbar from './Notificationbar';


function Navbar() {
  return (
    <div className='navbar-container'>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo512.png" alt="YAIA Logo" style={{height: "120px", marginRight: "10px", verticalAlign: "middle"}} />
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/involve">Get Involved</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar