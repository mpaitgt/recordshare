import React from 'react';
import Card from '../Components/Card';
import SearchBar from '../Components/SearchBar';
import SearchBtn from '../Components/SearchBtn';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Container from '../Components/Container';

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