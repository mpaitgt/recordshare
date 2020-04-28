import React, { useState, useContext } from 'react';
import Path from '../Elements/Path';
import SearchCard from '../Search/SearchCard';
import spotify from '../../Utils/spotify';
import { PayloadContext } from '../Providers/PayloadProvider';
import styled from '@emotion/styled';

const NAV = styled.div`
  background: var(--gray-0);
  color: var(--gray-2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px;
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
  const [input, setInput] = useState('');
  const [
    payload, 
    setPayload, 
    results, 
    setResults,
    search,
    setSearch
  ] = useContext(PayloadContext);

  const searchArtists = e => {
    e.preventDefault();
    spotify.getArtists(input)
      .then(res => {
        if (res.data.length === 0) {
          setResults(false);
        } else {
          console.log(res.data);
          setSearch(input);
          setPayload(res.data);
          setResults(true);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <NAV>
      <Path to="/">
        <H1>Medo</H1>
      </Path>
      <div>
        <SearchCard 
          searchMusic={searchArtists}
          search={input}
          handleChange={e => setInput(e.target.value)}
        />
      </div>
      <div>
      <Path to="/login">
          <ITEM>Dashboard</ITEM>
        </Path>
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