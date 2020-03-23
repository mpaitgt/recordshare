import React from 'react';
import styled from '@emotion/styled';

const INPUT = styled.input`
  border: none;
  // border-bottom: 4px solid var(--dark-green);
  text-align: left;
  padding: 12px 16px 8px 16px;
  // margin: 20px 0px;
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
    color: var(--gray-4);
    font-family: var(--subfont);
    font-size: 20px;
  }
  &:focus::placeholder {
    color: var(--white);
  }
`;

const BORDER = styled.div`
  background: #1E6043;
  height: 3px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

function Input({ name, value, type, placeholder, onChange }) {
  return (
    <div>
      <INPUT 
        className="input"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <BORDER />
    </div>
  )
}

export default Input;