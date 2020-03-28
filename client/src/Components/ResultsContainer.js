import React from 'react';
import styled from '@emotion/styled';

const GRID = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-content: center;
  width: auto;
  margin: 0 auto;
`;

function ResultsContainer(props) {
  return (
    <GRID>
      {props.children}
    </GRID>
  )
}

export default ResultsContainer;