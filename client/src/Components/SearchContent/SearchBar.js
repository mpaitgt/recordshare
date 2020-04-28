import React from 'react';
import styled from '@emotion/styled';

const INPUT = styled.input`
  border: none;
  border: 1px solid var(--light-green);
  padding: 8px 16px;
  font-size: 13px;
  font-family: var(--subfont);
  // background: none;
  color: var(--gray-1);
  width: 400px;
  margin-top: 20px;
  display: inline-block;
  &::placeholder {
    color: var(--gray-1);
    font-family: var(--subfont);
    font-size: 18px;
  }
  &:focus {
    outline: none;
  }
`;

function SearchBar({ name, value, type, placeholder, onChange }) {
  return (
      <INPUT 
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
  )
}

export default SearchBar;