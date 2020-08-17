import React from 'react';
import {css} from 'emotion';

const HoverLink = ({ children }) => {
  return (
    <h2 className={css`
      font-family: arial;
      letter-spacing: -2px;
      font-size: 52px;
      color: var(--gray-1);
      cursor: pointer;
      transition: all 1s;
      &:after {
        content: '»';
        margin-left: 26px;
        transform: translateX(50px);
      }
      &:hover {
        color: var(--blue);
        transition: all 1s;
        animation-name: arrow-slide;
        animation-duration: 1s;
        animation-iteration-count: 1;
      }
      &:after:hover {
        
      }
      @keyframes arrow-slide {
        0% {transform: translateX(0px)}
        100% {transform: translateX(50px)}
      }
    `}>
      {children}
    </h2>
  )
}

export default HoverLink;