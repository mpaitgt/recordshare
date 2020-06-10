import React from 'react';
import {Text, Container} from '../Components/Elements';
import SearchBar from '../Components/Search/SearchBar';

const Search = () => {
  return (
    <Container>
      <Text variant="h1">Search</Text>
      <SearchBar />
    </Container>
  )
}

export default Search;