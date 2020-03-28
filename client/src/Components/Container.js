import React from 'react';
import styled from '@emotion/styled';

const CONTAINER = styled.div`
  display: flex;
  padding: 0 50px;
  width: auto;
  margin: 0 auto;
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