import React from 'react';
import styled from '@emotion/styled';

let CARD = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  text-align: center;
  padding: 20px;
  max-width: 300px;
  margin: 0 auto;
  // background: var(--whiter);
  // box-shadow: 0px 0px 16px -6px rgba(0,0,0,0.75);
`;

const Card = ({ children, align }) => {
  return (
    <CARD>
      {children}
    </CARD>
  )
}

export default Card;