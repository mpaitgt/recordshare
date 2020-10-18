import React from 'react';
import styled from '@emotion/styled';

const BurgerContainer = styled.div`
  cursor: pointer;
  width: 42px;
  &:hover {
    background: var(--blue);
  }
`;

const Line = styled.div`
  display: none;  
  height: 2px;
  width: 80%;
  margin: 8px auto;
  background: white;
  // margin: 8px 0px;
  // margin-right: 40px;
  @media (max-width: 920px) {
    display: block;
  }
`;

const Burger = ({onClick}) => {
  return (
    <BurgerContainer onClick={onClick}>
      <Line />
      <Line />
      <Line />
    </BurgerContainer>
  )
}

export default Burger;