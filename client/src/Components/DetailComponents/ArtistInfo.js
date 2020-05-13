import React from 'react';
import Text from '../Elements/Text';
import Button from '../Elements/Button';
import Image from '../Elements/Image';
import styled from '@emotion/styled';

const CONTAINER = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TEXT = styled.div`
  margin-left: 60px;
`;

function ArtistInfo({artist, add, back}) {
  return (
    <CONTAINER>
      <Image 
        src={artist.images[0].url} 
        alt={`${artist.name} photo`} 
        type="artist"
        style={{ float: 'left' }}
      />
      <TEXT>
        <Text variant="h1">{artist.name}</Text>
        <Text variant="p1">{artist.genres.join(', ')}</Text>
        <Button onClick={back}>Back</Button>
        <Button onClick={add}>Add to Listen List</Button>
      </TEXT>
    </CONTAINER>
  )
}

export default ArtistInfo;