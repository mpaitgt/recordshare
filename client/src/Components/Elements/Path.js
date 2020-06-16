import React from 'react';
import {Link} from 'react-router-dom';
import {css} from 'emotion';

function Path({to, children, underline}) {
  return (
    <Link 
      to={to} 
      className={css`
        text-decoration: none;
        color: inherit;
        font-weight: ${underline ? '900' : '100'};
        &:hover {
          color: ${underline ? 'var(--blue)' : 'inherit'};
        }
      `}> 
      {children} 
    </Link>
  )
}

export default Path;