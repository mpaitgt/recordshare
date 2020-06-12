import React from 'react';
import {Text, Container} from '../Components/Elements';
import Logo from '../Components/Logo';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import img from '../Images/record-flipping.jpg';
import img2 from '../Images/record-shelf.jpg';

const Features = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ImageDisplay = styled.div`
  position: relative;
`;

const Home = () => {
  return (
    <Container>
      {/* <Text variant="headline">Welcome to Recordshare.</Text> */}
      <ImageDisplay>
      {/* <Logo size="102px" padding="0px" /> */}
        <img src={img} width="400"/>
        <img src={img2} width="600"/>
      </ImageDisplay>
      {/* <Features>
        <Text className={css`align-self: flex-start`} variant="h1">Find</Text>
        <Text className={css`align-self: center`} variant="h1">Share</Text>
        <Text className={css`align-self: flex-end`} variant="h1">Recommend</Text>
      </Features> */}
    </Container>
  )
}

export default Home;