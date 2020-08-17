import React, {useRef, useState, Fragment, useContext} from 'react';
import {Path} from '../Components/Elements';
import Logo from '../Components/Logo';
import { UserContext } from './Providers/UserProvider';
import Burger from '../Components/UI_Elements/Burger';
import styled from '@emotion/styled';
import userauth from '../Utils/userauth';
import styles from '../Modules/Navbar.module.scss';

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const [user] = useContext(UserContext);
  const nav = useRef(null);

  const toggleMenu = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  return (
    <div className={styles.navbar}>
      <Path to="/">
        <Logo size="32px" padding="0px 0px 0px 40px" />
      </Path>
      <Burger onClick={toggleMenu} />
      <div ref={nav} className={styles.itemContainer}>
        <div className={styles.navItem}>
          <Path to="/feed">
            Feed
          </Path>
        </div>
        <div className={styles.navItem}>
          <Path to="/search">
            Search
          </Path>
        </div>
        {
          user
          ? (
          <Fragment>
            <div className={styles.navItem}><Path to="/dashboard">Dashboard</Path></div>
            <div className={styles.navItem}><Path to="/upload">Upload</Path></div>
            <div className={styles.navItem} onClick={() => userauth.userLogout()}>Logout</div>
          </Fragment>
          ) : (
          <Fragment>
            <div className={styles.navItem}> <Path to="/login">Login</Path></div>
            <div className={styles.navItem}><Path to="/signup">Sign Up</Path></div>
          </Fragment>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;