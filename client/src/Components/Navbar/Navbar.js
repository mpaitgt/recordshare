import React, { useState, useContext } from 'react';
import Path from '../Elements/Path';
import SearchBar from '../Search/SearchBar';
import spotify from '../../Utils/spotify';
import { PayloadContext } from '../Providers/PayloadProvider';
import styled from '@emotion/styled';

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

  return (
    <NAV>
      <Path to="/">
        <H1>Recordshare</H1>
      </Path>
      <div>
        <Path to="/stories">
          <ITEM>Stories</ITEM>
        </Path>
        <Path to="/upload">
          <ITEM>Upload</ITEM>
        </Path>
        <Path to="/login">
          <ITEM>Login</ITEM>
        </Path>
        <Path to="/signup">
          <ITEM>Sign Up</ITEM>
        </Path>
      </div>
    </NAV>
  )
}

export default Navbar;