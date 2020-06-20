import React from 'react';
import styled from '@emotion/styled';
import {css} from 'emotion'; 

const Button = ({ margin, children, type, onClick, variant }) => {
  return (
    <button className={css`
      display: inline;
      font-family: var(--subfont);
      font-size: 14px;
      letter-spacing: 1px;
      background: linear-gradient(90deg, var(--orange-1), var(--orange-2));
      border: none;
      border-radius: 2px;
      padding: 6px 12px;
      margin: ${margin ? margin : '10px auto'};
      transition: all 0.1s;
      color: var(--whiter);
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
    `} type={type} onClick={onClick} variant={variant}>
      {children}
    </button>
  )
}

export default Button;