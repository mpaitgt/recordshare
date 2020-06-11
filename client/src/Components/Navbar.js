import React, {Fragment, useContext} from 'react';
import {Path} from './Elements';
import { UserContext } from './Providers/UserProvider';
import styled from '@emotion/styled';
import userauth from '../Utils/userauth';

const NAV = styled.nav`
  background: var(--gray-0);
  color: var(--gray-2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0;
`;

const H1 = styled.h1`
  font-family: var(--headerfont);
  font-size: 42px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: var(--white);
  background: -webkit-linear-gradient(var(--blue), var(--yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: 40px;
`;

const ITEM = styled.span`
  font-family: var(--subfont);
  font-size: 14px;
  padding: 0px 10px;
  margin: 0px 10px;
  color: var(--white);
  &:hover {
    transform: translateX(20px);
  }
`;

const NavItems = styled.div`
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
        <Path to="/search">
          <ITEM>Search</ITEM>
        </Path>
        {
          user
          ? (
          <Fragment>
            <Path to="/dashboard"><ITEM>Dashboard</ITEM></Path>
            <Path to="/upload"><ITEM>Upload</ITEM></Path>
            <ITEM onClick={() => userauth.userLogout()}>Logout</ITEM>
          </Fragment>
          ) : (
          <Fragment>
            <Path to="/login"><ITEM>Login</ITEM></Path>
            <Path to="/signup"><ITEM>Sign Up</ITEM></Path>
          </Fragment>
          )
        }
      </NavItems>
    </NAV>
  )
}

export default Navbar;