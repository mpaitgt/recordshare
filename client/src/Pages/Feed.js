import React, {useState, useEffect} from 'react';
import {Text, Button, Container} from '../Components/Elements';
import RecordLoader from '../Components/Loader';
import {ListDisplay, GridDisplay, DisplayToggle} from '../Components/Displays';
import db from '../Utils/db';
import styled from '@emotion/styled';

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Feed = () => {
  let [grid, setGrid] = useState(false);
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
    if (grid) {
      return <GridDisplay album={album} />;
    } else {
      return <ListDisplay album={album} />;
    }
  })

  return (
    <div style={{ marginBottom: '100px' }}>
    <Container>
      <Flex>
        <Text variant="h1">Feed</Text>
        <DisplayToggle grid={grid} setGrid={setGrid} />
      </Flex>
      { loaded ? displayAlbums : <RecordLoader /> }
    </Container>
    </div>
  )
}

export default Feed;