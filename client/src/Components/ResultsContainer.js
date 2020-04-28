import React from 'react';
import styled from '@emotion/styled';

const GRID = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  // width: auto;
  // margin: 0 auto;
  grid-gap: 10px;
`;

function ResultsContainer(props) {
  return (
    <GRID>
      {props.children}
    </GRID>
  )
}

export default ResultsContainer;