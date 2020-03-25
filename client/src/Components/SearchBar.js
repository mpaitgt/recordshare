import React from 'react';
import styled from '@emotion/styled';

const INPUT = styled.input`
  border: none;
  // border-bottom: 8px solid #1E6043;
  padding: 16px 16px 12px 16px;
  font-size: 28px;
  font-family: var(--subfont);
  background: none;
  color: var(--gray-1);
  width: 400px;
  margin-top: 20px;
  &::placeholder {
    color: var(--gray-1);
    font-family: var(--subfont);
    font-size: 28px;
  }
  &:focus {
    outline: none;
  }
`;

const BORDER = styled.div`
  background: #1E6043;
  height: 8px;
  border-radius: 5px;
`;

function SearchBar({ name, value, type, placeholder, onChange }) {
  return (
    <div>
      <INPUT 
        name={name}
        value={value}
        type={type}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <BORDER />
    </div>
  )
}

export default SearchBar;