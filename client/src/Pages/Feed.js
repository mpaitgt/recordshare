import React, {useState, useEffect} from 'react';
import {Text, Button, Container} from '../Components/Elements';
import RecordLoader from '../Components/Loader';
import AlbumDisplay from '../Components/AlbumDisplay';
import db from '../Utils/db';

const Feed = () => {
  let [loaded, setLoaded] = useState(false);
  let [albums, setAlbums] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      db.getAlbums().then(res => {
        setAlbums(res.data);
        setLoaded(true);
      }, 2000);
    })
  }, []);

  const displayAlbums = albums.map(album => {
    return <AlbumDisplay album={album} />
  })

  return (
    <div style={{ marginBottom: '100px' }}>
    <Container>
      <div>
        <Text variant="h1">Feed</Text>
        <Button variant="h4">List</Button>
        <Button variant="h4">Grid</Button>
      </div>
      { loaded ? displayAlbums : <RecordLoader /> }
    </Container>
    </div>
  )
}

export default Feed;