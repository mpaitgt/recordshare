import React, {useState, useEffect} from 'react';
import Text from '../Components/Elements/Text';
import Button from '../Components/Elements/Button';
import Container from '../Components/Elements/Container';
import RecordLoader from '../Components/Loader';
import data from '../Data/data.json';
import db from '../Utils/db';
// import spotify from '../Utils/spotify';
import AlbumDisplay from '../Components/AlbumDisplay';
import styled from '@emotion/styled';

const Header = styled.div`
  // display: flex;
  // flex-direction: column;
`;

function Stories(props) {
  let [loaded, setLoaded] = useState(false);
  let [albums, setAlbums] = useState([]);

  useEffect(() => {
    db.getAlbums()
      .then(res => {
        setAlbums(res.data);
        setLoaded(true);
      })
  }, []);

  const displayAlbums = albums.map(album => {
      return (
        <AlbumDisplay album={album} />
      )
    })

  return (
    <Container>
      <Header>
        <Text variant="h1">Recently Shared</Text>
        <Button variant="h4">List</Button>
        <Button variant="h4">Grid</Button>
      </Header>
      
      {
        loaded
        ?
        displayAlbums
        :
        <RecordLoader />
      }
    </Container>
  )
}

export default Stories;