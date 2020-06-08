import React, {Fragment, useContext} from 'react';
import Path from '../Elements/Path';
import { UserContext } from '../Providers/UserProvider';
import styled from '@emotion/styled';
import userauth from '../../Utils/userauth';

const NAV = styled.nav`
  background: var(--gray-0);
  color: var(--gray-2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  margin: 0;
`;

const H1 = styled.h1`
  font-family: var(--headerfont);
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: var(--white);
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

const Navbar = (props) => {
  const [user, setUser] = useContext(UserContext);

  return (
    <NAV>
      <Path to="/">
        <H1>Recordshare</H1>
      </Path>
      <div>
        <Path to="/search">
          <ITEM>Search</ITEM>
        </Path>
        <Path to="/stories">
          <ITEM>Recently Shared</ITEM>
        </Path>
        {
          user
          ? (
          <Fragment>
            <Path to="/dashboard">
              <ITEM>Dashboard</ITEM>
            </Path>
            <Path to="/upload">
              <ITEM>Upload</ITEM>
            </Path>
            <ITEM onClick={() => userauth.userLogout()}>Logout</ITEM>
          </Fragment>
          ) : (
          <Fragment>
            <Path to="/login">
              <ITEM>Login</ITEM>
            </Path>
            <Path to="/signup">
              <ITEM>Sign Up</ITEM>
            </Path>
          </Fragment>
          )
        }
      </div>
    </NAV>
  )
}

export default Navbar;