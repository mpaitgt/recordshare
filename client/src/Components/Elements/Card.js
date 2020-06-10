import React from 'react';
import styled from '@emotion/styled';

let CARD = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  text-align: center;
  // background: transparent;
  padding: 20px;
  // -webkit-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
  // -moz-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
  // box-shadow: 0px 0px 42px -20px rgba(0,0,0,0.75);
  max-width: 300px;
  margin: 0 auto;
`;

function Card({ children, align }) {

  return(
    <CARD>
      {children}
    </CARD>
  )
}

export default Card;