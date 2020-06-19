import React, {useState, useEffect, useContext} from 'react';
import {Text, Button, Container} from '../Components/Elements';
import RecordLoader from '../Components/Loader';
import {ListDisplay, GridDisplay, DisplayToggle} from '../Components/Displays';
import {ResultsContext} from '../Components/Providers/ResultsProvider';
import styled from '@emotion/styled';
import API from '../Utils';

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Feed = () => {
  let [results, setResults] = useContext(ResultsContext);
  let [grid, setGrid] = useState(false);
  let [loaded, setLoaded] = useState(false);
  // let [albums, setAlbums] = useState([]);

  useEffect(() => {
    setTimeout(() => getAllAlbums(), 2000);
  }, []);

  const getAllAlbums = () => {
    API.db.getAlbums()
      .then(res => {
        setResults(res.data);
        setLoaded(true);
      })
  }

  const displayAlbums = results.map(album => {
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
        <Button onClick={() => getAllAlbums()}>View all</Button>
        { loaded ? displayAlbums : <RecordLoader /> }
      </Container>
    </div>
  )
}

export default Feed;