import React from 'react';
import styled from '@emotion/styled';

const CONTAINER = styled.div`
  display: flex;
  padding: 0 55px;
  margin-top: 20px;
`;

function Container(props) {
  return (
    <CONTAINER className="container">
    {props.children}
    </CONTAINER>
  )
}

export default Container;