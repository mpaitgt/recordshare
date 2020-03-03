import React from 'react';
import './Input.css';

function Input({ name, value, type, placeholder, onChange }) {
  return (
    <input 
      className="input"
      name={name}
      value={value}
      type={type}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input;