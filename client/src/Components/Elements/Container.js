import React from 'react';
import styled from '@emotion/styled';

const CONTAINER = styled.div`
  display: flex;
  width: 80%;
  margin: 2rem auto;
  text-align: left;
  position: relative;
`;

function Container(props) {
  return (
    <CONTAINER>
      {props.children}
    </CONTAINER>
  )
}

export default Container;