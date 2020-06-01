import React, {useContext} from 'react';
import Path from '../Components/Elements/Path';
import Button from '../Components/Elements/Button';
import Text from '../Components/Elements/Text';
import {PayloadContext} from '../Components/Providers/PayloadProvider';
import styled from '@emotion/styled';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
`;

function AlbumDisplay({ display, album }) {
  let [artistAlbum, setArtistAlbum] = useContext(PayloadContext);
  const { image, title, artist, genres, story } = album;

  const artistAlbumState = (artist, title) => {
    setArtistAlbum({ artist: artist, title: title });
  }

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
        <Path to={`/albums/id/${artist}/${title}`}>
          <Button>Details</Button>
        </Path>
        <Button>Share your story</Button>
      </div>
    </Flex>
  )
}

export default AlbumDisplay;