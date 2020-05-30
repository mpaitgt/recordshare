import React from 'react';
import styled from '@emotion/styled';
import RecordPlayer from '../Images/record-player.jpg';

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  margin: 20px auto;
`;

const Image = styled.img`
  width: 100%;
  margin: 0 auto;
  align-self: center;
  justify-self: center;
  &:nth-child(1) {
    // transform: translateX(50px);
    width: 100%;
  }
  &:nth-child(2) {
    // z-index: 999;
  }
  &:nth-child(3) {
    transform: translateX(-50px);
  }
`;

function Home() {

  return (
    <ImageContainer>
      <Image src={RecordPlayer} alt="Elliott Smith" />
    </ImageContainer>
  )
}

export default Home;