import React from 'react';
import styled from '@emotion/styled';

const TILE = styled.div`
  transition: all 0.5s;
  transform-origin: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05) !important;
    transition: all 1s;
    transform-origin: center;
  }
`;

function Tile(props) {
  return (
    <TILE>
      {props.children}
    </TILE>
  )
}

export default Tile;