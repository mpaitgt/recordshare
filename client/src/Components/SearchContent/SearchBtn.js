import React from 'react';
import styled from '@emotion/styled';

const BUTTON = styled.button`
  font-family: var(--subfont);
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(90deg, var(--light-green), var(--light-green-2));
  color: var(--whiter);
  border: none;
  padding: 16px;
  border-radius: 120px;
  transition: all 0.25s;
  margin: 20px auto;
  width: 200px;
  -webkit-box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  &:hover {
    transition: all 0.25s;
    cursor: pointer;
    transform: scale(1.05);
    -webkit-box-shadow: 0px 11px 20px -16px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 11px 20px -16px rgba(0,0,0,0.75);
    box-shadow: 0px 11px 20px -16px rgba(0,0,0,0.75);
  }
  &:active {
    transition: all 0.25s;
    -webkit-box-shadow: 0px 11px 20px -32px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 11px 20px -32px rgba(0,0,0,0.75);
    box-shadow: 0px 11px 20px -32px rgba(0,0,0,0.75);
    transform: scale(0.95);
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