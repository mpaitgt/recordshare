import React, { useState, useContext } from 'react';
import Path from '../Elements/Path';
import SearchCard from '../SearchContent/SearchCard';
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
  const [search, setSearch] = useState('');
  const [payload, setPayload, results, setResults] = useContext(PayloadContext);

  const searchMusic = e => {
    e.preventDefault();
    spotify.getArtists(search)
      .then(res => {
        if (res.data.length === 0) {
          setResults(false);
        } else {
          console.log(res.data);
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
          searchMusic={searchMusic}
          search={search}
          handleChange={e => setSearch(e.target.value)}
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