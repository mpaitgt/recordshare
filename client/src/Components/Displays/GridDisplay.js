import React, {useContext} from 'react';
import {Image} from '../Elements';
import {UserContext} from '../Providers/UserProvider';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 20px;
`;

function GridDisplay({ display, album }) {
  const [user, setUser] = useContext(UserContext);
  const { image, title, artist, genres, story, date_added } = album;

  return (
      <Image 
        style={{ justifySelf: 'center', margin: '20px' }} 
        width="200" 
        height="200"
        src={image.url} 
        alt={`${album.title} by ${artist}`} 
      />
  )
}

export default GridDisplay;