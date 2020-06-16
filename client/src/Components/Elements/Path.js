import React from 'react';
import {Link} from 'react-router-dom';
import {css} from 'emotion';

function Path(props) {
  return (
    <Link 
      to={props.to} 
      className={css`
        text-decoration: none;
        color: inherit;
        color: var(--blue);
      `}> 
      {props.children} 
    </Link>
  )
}

export default Path;