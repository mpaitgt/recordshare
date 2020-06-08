import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';

const Features = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  // &:nth-child(1) {
  //   align-item: flex-start;
  // }
  // &:nth-child(2) {
  //   align-item: center;
  // }
  // &:nth-child(3) {
  //   align-item: flex-end;
  // }
`;

function Home() {

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