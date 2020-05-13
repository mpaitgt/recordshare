import React, {useState} from 'react';
import Card from '../Elements/Card';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import styled from '@emotion/styled';



function SearchCard({ searchMusic, search, handleChange }) {
  return (
      <form onSubmit={searchMusic}>
          <SearchBar 
            name="search" 
            value={search} 
            onChange={handleChange} 
            placeholder="Search content" 
          />
          <SearchBtn type="submit">Listen</SearchBtn>
      </form>
  )
}

export default SearchCard;