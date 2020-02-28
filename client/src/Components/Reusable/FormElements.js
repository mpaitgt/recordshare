import React, {useState} from 'react';

export function TextField(props) {
  const [value, setValue] = useState('');

  return (
    <input 
      value={value}
      style={{
        padding: '10px',
        margin: '10px',
        display: 'block',
        background: 'transparent',
        color: 'inherit',
        border: '1px solid white',
        borderBottom: '3px solid white'
      }}
      placeholder={props.placeholder}
      onChange={e => { setValue(e.target.value) }}
    />
  )
}

export function Button(props) {
  return (
    <button
      value={props.value}
      style={{
        padding: '10px 20px',
        background: 'white',
        border: 'none',
        width: 'auto',
        margin: '0 auto',
        textAlign: 'center'
      }}
    >
    {props.children}
    </button>
  )
}