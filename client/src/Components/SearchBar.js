import React from 'react';
import styled from '@emotion/styled';

const INPUT = styled.input`
  border: none;
  border-bottom: 8px solid #1E6043;
  border-radius: 5px;
  padding: 10px 18px;
  font-size: 28px;
  background: none;
  color: #2B2B2B;
  width: 400px;
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