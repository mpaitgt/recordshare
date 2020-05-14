import React from 'react';
import styled from '@emotion/styled';

const GRID = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 50px;
`;

function ResultsContainer(props) {
  return (
    <GRID>
      {props.children}
    </GRID>
  )
}

export default ResultsContainer;