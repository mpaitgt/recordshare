import React from 'react';
import styled from '@emotion/styled';

function Button({ children, type, onClick, variant, display }) {

  const BUTTON = styled.button`
    display: ${display === 'block' ? 'block' : display === 'inline' ? 'inline' : display === 'inline-block' ? 'inline-block' : 'inline'};
    font-family: var(--subfont);
    font-size: 14px;
    letter-spacing: 1px;
    background: linear-gradient(90deg, var(--red-1), var(--red-2));
    border: none;
    border-radius: 5px;
    padding: 6px 12px;
    margin: ${display === 'inline' ? '0px 8px 0px 0px' : '20px auto 20px auto'};
    transition: all 0.1s;
    color: white;
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

  return (
    <BUTTON 
      className="button" 
      type={type} 
      onClick={onClick}
      variant={variant}
    >
      {children}
    </BUTTON>
  )
}

export default Button;