import React from 'react';
import styled from '@emotion/styled';

// let CARD = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   border-radius: 8px;
//   background: white;
//   padding: 20px;
//   -webkit-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
//   -moz-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
//   box-shadow: 0px 0px 42px -20px rgba(0,0,0,0.75);
//   max-width: 300px;
//   margin: 0 auto;
// `;

function Card({ children, align }) {

  let CARD = styled.div`
  border-radius: 8px;
  background: white;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 42px -20px rgba(0,0,0,0.75);
  max-width: 300px;
  margin: 0 auto;
  text-align: ${align === 'left' ? 'left' : align === 'right' ? 'right' : align === 'center' ? 'center' : 'left'}
`;

  return(
    <CARD>
      {children}
    </CARD>
  )
}

export default Card;