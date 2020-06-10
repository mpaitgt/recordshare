import React, {useState} from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  border: none;
  border: 1px solid var(--gray-4);
  padding: 8px 16px;
  font-size: 13px;
  font-family: var(--subfont);
  color: var(--gray-1);
  width: 400px;
  margin-top: 20px;
  display: inline-block;
  border-radius: 5px 0px 0px 5px;
  &::placeholder {
    color: var(--gray-0);
    font-family: var(--subfont);
    font-size: 13px;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-family: var(--subfont);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: var(--gray-4);
  color: var(--white);
  border: none;
  font-weight: 500;
  padding: 9px 12px;
  border-radius: 0px 120px 120px 0px;
  transition: all 0.25s;
  margin: 20px auto;
  display: inline;
  -webkit-box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
  cursor: pointer;
`;

function SearchBar({ input, onChange, onSubmit }) {

  return (
    <form onSubmit={onSubmit}>
      <Input 
        name='search'
        value={input}
        placeholder='search artists or albums'
        onChange={onChange}
      />
      <Button type='submit'>
        Search
      </Button>
    </form>
  )
}

export default SearchBar;