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
        <strong>Dashboard</strong>
      </Path>
      <Path to="/login">
        <strong>Login</strong>
      </Path>
      <Path to="/register">
        <strong>Register</strong>
      </Path>
    </div>
  )
}

export default Navbar;