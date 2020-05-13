import React from 'react';
import styled from '@emotion/styled';

const INPUT = styled.input`
  border: none;
  padding: 8px 16px;
  font-size: 13px;
  font-family: var(--subfont);
  color: var(--gray-1);
  width: 400px;
  margin-top: 20px;
  display: inline-block;
  border-radius: 5px 0px 0px 5px;
  &::placeholder {
    color: var(--red-1);
    font-family: var(--subfont);
    font-size: 13px;
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