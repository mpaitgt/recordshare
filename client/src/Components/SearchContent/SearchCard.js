import React, {useState} from 'react';
import Card from '../Card';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
// import Button from '../Elements/Button';
// import Text from '../Text';
import Container from '../Container';

function SearchCard({ searchMusic, searchMovies, search, handleChange }) {
  return (
    <Card>
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
    </Card>
  )
}

export default SearchCard;