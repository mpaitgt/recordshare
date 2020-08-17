import React from 'react';

import {css} from 'emotion';

const Logo = ({size, padding}) => {
  return (
    <h1 className={css`
      font-family: var(--headerfont);
      font-size: ${size};
      letter-spacing: 4px;
      text-transform: uppercase;
      text-align: center;
      color: var(--white);
      background: -webkit-linear-gradient(var(--blue), var(--yellow));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding: ${padding};
      transition: all 0.1s ease-in;
      &:hover {
        transform: translateX(10px);
        transition: all 0.1s ease-out;
      }
    `}>
      Recordshare
    </h1>
  )
}

export default Logo;