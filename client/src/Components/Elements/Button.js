import React from 'react';
import styled from '@emotion/styled';

const BUTTON = styled.button`
  font-family: var(--subfont);
  font-size: 14px;
  letter-spacing: 1px;
  background: linear-gradient(90deg, var(--light-green), var(--light-green-2));
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  margin: 12px 20px 12px 0px;
  transition: all 0.1s;
  -webkit-box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  &:hover {
    transition: all 0.1s;
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

function Button({ children, type, onClick, variant }) {
  return (
    <BUTTON 
      className="button" 
      type={type} 
      onClick={onClick}
      variant={variant}
      style={
        variant === 'standard'
        ?
        { background: 'linear-gradient(90deg, var(--red-1), var(--red-2)', color: 'var(--whiter)' }
        :
        variant === 'warning'
        ?
        { background: 'linear-gradient(90deg, var(--yellow-1), var(--yellow-2)', color: 'var(--gray-1)' }
        :
        variant === 'danger'
        ?
        { background: 'linear-gradient(90deg, var(--red-1), var(--red-2)', color: 'var(--whiter)' }
        :
        { background: 'linear-gradient(90deg, var(--red-1), var(--red-2)', color: 'var(--whiter)' }
      }
    >
      {children}
    </BUTTON>
  )
}

export default Button;