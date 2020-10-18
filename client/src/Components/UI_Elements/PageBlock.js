import React from 'react';
import styled from '@emotion/styled';

function PageBlock({ image, size, children }) {

  const Background = styled.div`
    position: relative;
    background-image: url('${image}');
    background-position: center;
    background-size: ${size};
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--whiter);
  `;

  return (
    <Background>{children}</Background>
  )
}

export default PageBlock;