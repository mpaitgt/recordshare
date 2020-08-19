import React, {useContext} from 'react';
import {Text, Image, Button} from '../Elements';
import Like from '../UI_Elements/Like';
import {UserContext} from '../Providers/UserProvider';
import GenreTag from '../UI_Elements/GenreTag';
import {ResultsContext} from '../Providers/ResultsProvider';
import styled from '@emotion/styled';
import {css} from 'emotion';
import API from '../../Utils';
// import higherOrderComponent from '../Details-HOC';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  padding: 12px 0px;
  margin: 20px 0px;
  
`;

function ListDisplay({ display, album }) {
  // const [user, setUser] = useContext(UserContext);
  const [results, setResults] = useContext(ResultsContext);
  const { image, title, artist, genres, rating, date_added, user_id } = album;

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
        <Text variant="h3">{title}</Text>
        <Text variant="h4">by {artist}</Text>
        <div style={{ display: 'flex', margin: '8px 0px' }}>
        {
          genres.map((genre, index) => {
            return <GenreTag genre={genre} onClick={genreClick} key={index} />
          })
        }
        </div>
        <div className={css`display: flex; margin: 20px 0px; align-items: center; justify-content: space-between;`}>
          <Text variant="p1">{rating} / 10</Text>
          <Like album={album} />
          <Button margin="0px 20px 0px 0px" display="inline-block">Details</Button>
        </div>
        <Text variant="description">
          Added {API.helpers.convertDate(date_added)} by {user_id.username}
        </Text>
      </div>
    </Flex>
  )
}

export default ListDisplay;