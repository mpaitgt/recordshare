import React from 'react';
import styled from '@emotion/styled';

const BUTTON = styled.button`
  border: none;
  background: var(--light-green);
  padding: 12px 12px;
  font-size: 22px;
  border-radius: 120px;
  letter-spacing: inherit;
  text-transform: inherit;
  transition: all 0.25s;
  margin: 10px auto;
  width: 200px;
  font-family: var(--headerfont);
  &:hover {
    transition: all 0.25s;
    cursor: pointer;
    background: var(--white);
  }
`;

function SearchBtn({ children, type, onClick }) {
  return (
    <BUTTON className="button" type={type} onClick={onClick}>
      {children}
    </BUTTON>
  )
}

export default SearchBtn;