import React, {useState} from 'react';
import {Text, Container} from '../Components/Elements';
import AlbumDisplay from '../Components/AlbumDisplay';
import SearchBar from '../Components/Search/SearchBar';
import API from '../Utils';

const Search = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    API.db.getAlbums(input)
      .then(res => {
        if (res.data) {
          setResults(res.data);
          setLoaded(true);
          console.log(res.data)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <Text variant="h1">Search</Text>
      <SearchBar value={input} onChange={e => setInput(e.target.value)} onSubmit={onSubmit} />
        {
          loaded
          ?
          results.map(album => {
            return <AlbumDisplay album={album} />
          })
          : 
          null
        }
    </Container>
  )
}

export default Search;