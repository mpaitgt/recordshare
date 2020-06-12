import React, {Fragment, useContext} from 'react';
import {Path} from '../Components/Elements';
import Logo from '../Components/Logo';
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
  padding: 10px;
  margin: 0;
`;

const ITEM = styled.li`
display: inline-block;
  font-family: var(--subfont);
  font-size: 14px;
  padding: 8px 10px;
  margin: 0px 24px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  color: var(--blue);
  height: 100%;
  &:hover {
    transition: all 0.1s ease-in-out;
    transform: translate(2px, -2px) scale(1.1);
    background: var(--yellow);
    color: var(--gray-1) !important;
    box-shadow: -4px 4px rgba(255,255,255,0.8);
  }
  &:focus {
    border: 1px solid var(--blue);
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
        <Logo size="32px" padding="0px 0px 0px 40px" />
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