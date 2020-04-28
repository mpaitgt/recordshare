import React from 'react';
import styled from '@emotion/styled';

const BUTTON = styled.button`
  font-family: var(--subfont);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(90deg, var(--red-1), var(--red-2));
  color: var(--whiter);
  border: none;
  padding: 8px 12px;
  border-radius: 0px 120px 120px 0px;
  transition: all 0.25s;
  margin: 20px auto;
  display: inline;
  transform: scale(1.05);
  -webkit-box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  cursor: pointer;
  // &:hover {
  //   transition: all 0.25s;
  //   cursor: pointer;
  //   transform: scale(1.05);
  //   -webkit-box-shadow: 0px 11px 20px -16px rgba(0,0,0,0.75);
  //   -moz-box-shadow: 0px 11px 20px -16px rgba(0,0,0,0.75);
  //   box-shadow: 0px 11px 20px -16px rgba(0,0,0,0.75);
  // }
  // &:active {
  //   transition: all 0.25s;
  //   -webkit-box-shadow: 0px 11px 20px -32px rgba(0,0,0,0.75);
  //   -moz-box-shadow: 0px 11px 20px -32px rgba(0,0,0,0.75);
  //   box-shadow: 0px 11px 20px -32px rgba(0,0,0,0.75);
  //   transform: scale(0.95);
  // }
`;

function SearchBtn({ children, type, onClick }) {
  return (
    <BUTTON className="button" type={type} onClick={onClick}>
      {children}
    </BUTTON>
  )
}

export default SearchBtn;