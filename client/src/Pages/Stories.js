import React, {useState, useEffect} from 'react';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
import Button from '../Components/Elements/Button';
import Record from '../Components/Loader';
import data from '../Data/data.json';
import styled from '@emotion/styled';
import db from '../Utils/db';
import spotify from '../Utils/spotify';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
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

  const albumDetails = (search, artist) => {
    spotify.getAlbums(search)
      .then(res => {
        let album = res.data.filter(item => item.artists[0].name === artist && item.type === 'album');
        console.log(album);
        spotify.getAlbumTracks(album[0].id)
          .then(tracks => console.log(tracks.data))
      })
      .catch(err => console.log(err))
  }

  const displayAlbums = albums.map(album => {
      const { image, title, artist, genres, story } = album;
      return (
        <Flex>
          <img 
            style={{ justifySelf: 'center', margin: '20px' }} 
            width="260" src={image.url} 
            alt={`${album.title} by ${artist}`} 
          />
          <div>
            <Text variant="h1">{title}</Text>
            <Text variant="h2">by {artist}</Text>
            <Text variant="h4">{genres.join(', ')}</Text>
            <Text variant="p1">{story}</Text>
            <Button onClick={() => albumDetails(title, artist)}>Details</Button>
            <Button onClick={() => console.log(albums)}>Share your story</Button>
          </div>
        </Flex>
      )
    })

  return (
    <Container>
      <Text variant="h1">Recently Shared</Text>
      {
        loaded
        ?
        displayAlbums
        :
        <Record />
      }
    </Container>
  )
}

export default Stories;