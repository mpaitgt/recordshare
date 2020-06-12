import React, {Fragment, useContext} from 'react';
import {Path} from './Elements';
import { UserContext } from './Providers/UserProvider';
import styled from '@emotion/styled';
import userauth from '../Utils/userauth';

const NAV = styled.nav`
  position: relative;
  background: var(--gray-0);
  color: var(--gray-2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // padding: 10px;
  margin: 0;
`;

const H1 = styled.h1`
  // position: absolute;
  // top: 0px;
  font-family: var(--headerfont);
  font-size: 48px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: var(--white);
  background: -webkit-linear-gradient(var(--yellow), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: 40px;
`;

const ITEM = styled.li`
display: inline-block;
  font-family: var(--subfont);
  font-size: 16px;
  padding: 20px 10px;
  margin: 0px 32px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  color: var(--blue);
  height: 100%;
  &:hover {
    transition: all 0.1s ease-in-out;
    transform: translate(2px, -2px) scale(1.1);
    text-shadow: -1px 1px rgba(253,232,81,0.4);
  }
  &:focus {
    border: 1px solid var(--blue);
    color: var(--yellow);
  }
  a {
    &:active {
      color: var(--yellow);
    }
  }
`;

const NavItems = styled.ul`
  padding-right: 40px;
`;

const Navbar = (props) => {
  const [user] = useContext(UserContext);

  return (
    <NAV>
      <Path to="/">
        <H1>Recordshare</H1>
      </Path>
      <NavItems>
        <ITEM>
          <Path to="/feed">
            Feed
          </Path>
        </ITEM>
        <ITEM>
          <Path to="/search">
            Search
          </Path>
        </ITEM>
        {
          user
          ? (
          <Fragment>
            <ITEM><Path to="/dashboard">Dashboard</Path></ITEM>
            <ITEM><Path to="/upload">Upload</Path></ITEM>
            <ITEM onClick={() => userauth.userLogout()}>Logout</ITEM>
          </Fragment>
          ) : (
          <Fragment>
            <ITEM> <Path to="/login">Login</Path></ITEM>
            <ITEM><Path to="/signup">Sign Up</Path></ITEM>
          </Fragment>
          )
        }
      </NavItems>
    </NAV>
  )
}

export default Navbar;