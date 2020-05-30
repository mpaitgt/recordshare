import React, {useState, useEffect} from 'react';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
import Button from '../Components/Elements/Button';
import data from '../Data/data.json';
import styled from '@emotion/styled';
import db from '../Utils/db';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  flex-direction: row;
  align-items: center;
  row-gap: 20px;
`;

function Stories(props) {
  let [loaded, setLoaded] = useState(false);
  let [albums, setAlbums] = useState([...data.albums]);

  useEffect(() => {
    db.getAlbums()
      .then(res => {
        setAlbums([...albums, ...res.data]);
        setLoaded(true);
      })
  }, []);

  const displayAlbums = albums.map(album => {
      return (
        <Flex>
          <img 
            style={{ justifySelf: 'center' }} 
            width="320" src={album.image.url || album.image[0].url} 
            alt={`${album.title} by ${album.artist}`} 
          />
          <div>
            <Text variant="h1">{album.title}</Text>
            <Text variant="h2">by {album.artist}</Text>
            <Text variant="h6">{album.genres.join(', ')}</Text>
            <Text variant="p1">{album.story}</Text>
            <Button onClick={() => console.log(albums)}>Share your story</Button>
          </div>
        </Flex>
      )
    })

  return (
    <Container>
      <Text variant="h1">Recent Stories</Text>
      {
        loaded
        ?
        displayAlbums
        :
        null
      }
    </Container>
  )
}

export default Stories;