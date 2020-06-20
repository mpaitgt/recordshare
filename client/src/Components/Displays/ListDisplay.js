import React, {useEffect, useContext} from 'react';
import {Text, Image, Button} from '../Elements';
import Like from '../Like';
import {UserContext} from '../Providers/UserProvider';
import GenreTag from '../GenreTag';
// import ResultsHOC from '../ResultsHOC';
import {ResultsContext} from '../Providers/ResultsProvider';
import styled from '@emotion/styled';
import API from '../../Utils';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  // justify-content: space-around;
  // box-shadow: 3px 1px 6px 3px rgba(0,0,0,0.1);
  padding: 12px 0px;
  // background: var(--whiter);
  margin: 20px 0px;
`;

const Content = styled.div`
  max-width: 600px;
`;

function ListDisplay({ display, album }) {
  const [user, setUser] = useContext(UserContext);
  const [results, setResults] = useContext(ResultsContext);
  const { image, title, artist, genres, story, date_added, submitted_by } = album;

  // useEffect(() => {
  //   console.log(album);
  // }, [])

  const genreClick = e => {
    e.preventDefault();
    API.db.filterGenres(e.target.textContent)
      .then(res => setResults(res.data))
      .catch(err => console.log(err));
  }

  return (
    <Flex>
      <Image 
        width="300" 
        height="300"
        src={image.url} 
        alt={`${album.title} by ${artist}`} 
      />
      <div>
        <Text variant="h2">{title}</Text>
        <Text variant="h3">by {artist}</Text>
        <div style={{ display: 'flex' }}>
        {
          genres.map(genre => {
            return <GenreTag genre={genre} onClick={genreClick} />
          })
        }
        </div>
        <Content>
          <Text variant="p1">{story}</Text>
        </Content>
        <div>
          {/* { user ? <Like album={album} /> : null } */}
          <Button margin="0px 20px 0px 0px" display="inline">Details</Button>
          <Button margin="0px 20px 0px 0px" display="inline">Share your story</Button>
        </div>
      <Text variant="description">Added {API.helpers.convertDate(date_added)}</Text>
      </div>
    </Flex>
  )
}

export default ListDisplay;