import React from 'react';
import styled from '@emotion/styled';

const INPUT = styled.input`
  border: none;
  border-bottom: 4px solid var(--dark-green);
  text-align: left;
  padding: 16px 16px 8px 16px;
  margin: 20px 0px;
  font-family: var(--subfont);
  font-size: 20px;
  background: transparent;
  text-transform: inherit;
  letter-spacing: inherit;
  transition: all 0.25s;
  &:focus {
    outline: none;
    background: var(--light-green);
    color: white;
    transition: all 0.25s;
  }
  &::placeholder {
    color: var(--gray-6);
    font-family: var(--subfont);
    font-size: 20px;
  }
  &:focus::placeholder {
    color: var(--white);
  }
`;

function Input({ name, value, type, placeholder, onChange }) {
  return (
    <INPUT 
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