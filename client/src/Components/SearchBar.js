import React from 'react';
import styled from '@emotion/styled';

const INPUT = styled.input`
  border: none;
  border-bottom: 8px solid #1E6043;
  padding: 16px 16px 8px 16px;
  font-size: 28px;
  font-family: var(--subfont);
  background: none;
  color: #2B2B2B;
  width: 400px;
  &::placeholder {
    color: var(--gray-1);
    font-family: var(--subfont);
    font-size: 28px;
  }
`;

function SearchBar({ name, value, type, placeholder, onChange }) {
  return (
    <INPUT 
      name={name}
      value={value}
      type={type}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default SearchBar;