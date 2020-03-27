import React from 'react';
import Path from './Path';
import styled from '@emotion/styled';

const NAV = styled.div`
  background: #1E6043;
  color: var(--gray-2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 0px;
  margin: 0;
  margin-bottom: 40px;
`;

const H1 = styled.h1`
  font-family: var(--headerfont);
  font-size: 62px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  margin: 0px 20px;
  color: var(--white);
`;

const ITEM = styled.span`
  font-family: var(--subfont);
  font-size: 20px;
  padding: 0px 10px;
  margin: 0px 10px;
  color: var(--white);
  &:hover {
    transform: translateX(20px);
  }
`;

const Navbar = () => {

  return (
    <NAV>
      <Path to="/">
        <H1>Medo</H1>
      </Path>
      <div>
        <Path to="/login">
          <ITEM>Login</ITEM>
        </Path>
        <Path to="/register">
          <ITEM>Register</ITEM>
        </Path>
      </div>
    </NAV>
  )
}

export default Navbar;