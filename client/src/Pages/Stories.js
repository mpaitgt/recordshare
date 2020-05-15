import React from 'react';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
import Button from '../Components/Elements/Button';
import data from '../Data/data.json';
import styled from '@emotion/styled';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  flex-direction: row;
  align-items: center;
  row-gap: 20px;
`;

function ArtistDetail(props) {

  return (
    <Container>
      <Text variant="h1">Recent Stories</Text>
      {
        data.albums.map(album => {
          return (
            <Flex>
              <img style={{ justifySelf: 'center' }} width="320" src={album.image} alt={`${album.title} by ${album.artist}`} />
              <div>
                <Text variant="h1">{album.title}</Text>
                <Text variant="h2">by {album.artist}</Text>
                <Text variant="h6">{album.genres.join(', ')}</Text>
                <Text variant="p1">{album.story}</Text>
                <Button>Like {album.title}</Button>
                <Button>Login to share your story</Button>
              </div>
            </Flex>
          )
        })
      }
    </Container>
  )
}

export default ArtistDetail;