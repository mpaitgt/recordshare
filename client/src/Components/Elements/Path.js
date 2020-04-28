import React from 'react';
import {Link} from 'react-router-dom';

const style = {
  textDecoration: 'none',
  color: 'inherit',
  fontSize: '13px'
};

function Path(props) {
  return (
    <Link to={props.to} style={style}> 
      {props.children} 
    </Link>
  )
}

export default Path;