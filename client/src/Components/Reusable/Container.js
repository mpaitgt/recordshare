import React from 'react';

function Container(props) {
  return (
    <div 
      style={{
        width: '60%',
        margin: '0 auto'
      }}
    >
    {props.children}
    </div>
  )
}

export default Container;