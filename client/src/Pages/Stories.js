import React, {useState, useEffect} from 'react';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
import RecordLoader from '../Components/Loader';
import data from '../Data/data.json';
import db from '../Utils/db';
import spotify from '../Utils/spotify';
import AlbumDisplay from '../Components/AlbumDisplay';

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
        <AlbumDisplay album={album} />
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
        <RecordLoader />
      }
    </Container>
  )
}

export default Stories;