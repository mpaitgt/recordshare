import React from 'react';
import Card from '../Card';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import Button from '../Button';
import Text from '../Text';
import Container from '../Container';

function SearchCard({ search_type, toggleSearch, handleSubmit, search, handleChange }) {
  return (
    <Card>
      <Text variant="h4">{search_type}</Text>
      <div>
        <Button onClick={toggleSearch}>Watch</Button>
        <Button onClick={toggleSearch}>Listen</Button>
      </div>
      <Container>
        <form className="search-form page" onSubmit={handleSubmit}>
          <SearchBar 
            name="search" 
            value={search} 
            onChange={handleChange} 
            placeholder="Search content" 
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </form>
      </Container>
    </Card>
  )
}

export default SearchCard;