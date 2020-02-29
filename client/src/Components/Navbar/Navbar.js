import React from 'react';
import './Navbar.css';
import Path from '../Path/Path';

const Navbar = () => {

  return (
    <div className="nav">
      <Path to="/">
        <h1 className="title">
          Medo
        </h1>
      </Path>
      <Path to="/dashboard">
        Dashboard
      </Path>
      <Path to="/login">
        Login
      </Path>
      <Path to="/register">
        Register
      </Path>
    </div>
  )
}

export default Navbar;