import React from 'react';
import Container from '../Components/Elements/Container';
import Text from '../Components/Elements/Text';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 30% 20%;
  align-items: center;
  justify-items: center;
  margin: 50px auto;
`;

const Image = styled.img`
  width: 90%;
  margin: 0 auto;
`;

function Home() {

  return (
    <Container>
      <ImageContainer>
        <Image src="https://images-na.ssl-images-amazon.com/images/I/61lUneegouL._SL1200_.jpg" alt="Parquet Courts Wide Awake!" />
        <Image src="https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fG2jeKuV/SharedImage-71239.jpg?t=9c9b0510548fa94cb9ec" alt="Elliott Smith" />
        <Image src="https://images-na.ssl-images-amazon.com/images/I/81CQJlevKLL._SL1500_.jpg" alt="Deja Entendu" />
      </ImageContainer>
      <Text variant="h1">No, we're not a label.</Text>
      <Text variant="h4">
        This is a place where you can share records that mean something to you. What makes them special?
        <br /><br />
        It's a place where you can expose the beating heart of the records you love, and share them with others.
      </Text>
    </Container>
  )
}

export default Home;