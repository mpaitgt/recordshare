import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="nav">
      <Link to="/login">
        Login
      </Link>
      <h1 className="title">
        Medo
      </h1>
      <Link to="/search">
        Search
      </Link>
    </div>
  )
}

export default Navbar;