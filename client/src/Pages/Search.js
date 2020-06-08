import React from 'react';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
import SearchBar from '../Components/Search/SearchBar';

function Search() {
  return (
    <Container>
      <Text variant="h1">Search</Text>
      <SearchBar />
    </Container>
  )
}

export default Search;