import React, {useState, useContext} from 'react';
import {Text, Container} from '../Components/Elements';
import {ListDisplay} from '../Components/Displays';
import SearchBar from '../Components/Search/SearchBar';
import {ResultsContext} from '../Components/Providers/ResultsProvider';
import API from '../Utils';
import styled from '@emotion/styled';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [input, setInput] = useState('');
  const [results, setResults] = useContext(ResultsContext);
  const [loaded, setLoaded] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    API.db.searchAlbums(input)
      .then(res => {
        if (res.data) {
          setSearchTerm(input);
          setResults(res.data);
          setLoaded(true);
        } else {
          console.log('there is a situation', res)
        }
      })
      .catch(err => console.log(err))
  }

  const conditionallyRenderResults = () => {
    if (results.length > 0) {
      return results.map(album => {
        return <ListDisplay album={album} />
      })
    } else {
        return <Text variant="h3">Sorry, it doesn't look like we've found any matches.</Text>
    }
  }

  return (
    <Container>
      <Text variant="h1">Search</Text>
      <Flex>
        <SearchBar value={input} onChange={e => setInput(e.target.value)} onSubmit={onSubmit} />
        {
          loaded
          ?
          <Text variant="description">{results.length} results for "{searchTerm}"</Text>
          :
          null
        }
      </Flex>
        {
          loaded
          ?
          conditionallyRenderResults()
          : 
          null
        }
    </Container>
  )
}

export default Search;