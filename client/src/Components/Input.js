import React from 'react';
import styled from '@emotion/styled';

const INPUT = styled.input`
  border: 2px solid var(--gray-5);
  border-radius: 6px;
  text-align: left;
  padding: 8px 16px;
  margin: 10px 0px;
  font-size: 18px;
  background: transparent;
  text-transform: inherit;
  letter-spacing: inherit;
  transition: all 0.25s;
  &:focus {
    background: var(--white);
    color: var(--gray-1);
    transition: all 0.25s;
  }
  &::placeholder {
    color: var(--dark-green);
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