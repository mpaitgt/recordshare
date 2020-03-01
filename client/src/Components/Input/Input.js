import React from 'react';
import './Input.css';

function Input({ name, value, placeholder, onChange }) {
  return (
    <input 
      className="input"
      name={name}
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input;