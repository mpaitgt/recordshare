import React, {useState} from 'react';
import Card from '../Card';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import {Container} from 'react-grid-system';

function SearchCard({ searchMusic, searchMovies, search, handleChange }) {
  return (
      <Container>
          <SearchBar 
            name="search" 
            value={search} 
            onChange={handleChange} 
            placeholder="Search content" 
          />
          <SearchBtn onClick={searchMovies} type="submit">Watch</SearchBtn>
          <SearchBtn onClick={searchMusic} type="submit">Listen</SearchBtn>
      </Container>
  )
}

export default SearchCard;