import React from 'react';
import {Text, Container} from '../Components/Elements';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

const Features = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Home = () => {
  return (
    <Container>
      <Text variant="headline">Welcome to Recordshare.</Text>
      <Features>
        <Text className={css`align-self: flex-start`} variant="h1">Find</Text>
        <Text className={css`align-self: center`} variant="h1">Share</Text>
        <Text className={css`align-self: flex-end`} variant="h1">Recommend</Text>
      </Features>
    </Container>
  )
}

export default Home;