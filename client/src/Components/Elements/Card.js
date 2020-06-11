import React from 'react';
import styled from '@emotion/styled';

let CARD = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  text-align: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Card = ({ children, align }) => {
  return (
    <CARD>
      {children}
    </CARD>
  )
}

export default Card;