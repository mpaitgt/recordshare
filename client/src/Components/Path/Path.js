import React from 'react';
import {Link} from 'react-router-dom';
import './Path.css';

function Path(props) {
  return (
    <Link to={props.to} className="link"> 
      {props.children} 
    </Link>
  )
}

export default Path;