import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Images/medo-logo.png'

const Navbar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <img src={Logo} height="100"></img>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/login">
        <h4>Login</h4>
      </Link>
      <Link to="/register">
        <h4>Register</h4>
      </Link>
    </div>
  )
}

export default Navbar;