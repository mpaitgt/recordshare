import React, {useState, useEffect} from 'react';
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
`;

function ArtistDetail(props) {

  return (
    <Container>
      <Text variant="h1">Recent Stories</Text>
      {
        data.albums.map(item => {
          return (
            <Flex>
              <img style={{ justifySelf: 'center' }} width="320" src={item.image} alt={`${item.title} by ${item.artist}`} />
              <div>
                <Text variant="h1">{item.title}</Text>
                <Text variant="h2">by {item.artist}</Text>
                <Text variant="h6">{item.genres.join(', ')}</Text>
                <Text variant="p1">{item.story}</Text>
                <Button>Back this record</Button>
              </div>
            </Flex>
          )
        })
      }
    </Container>
  )
}

export default ArtistDetail;