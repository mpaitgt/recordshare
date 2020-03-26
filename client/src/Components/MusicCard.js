import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

const ALBUM = styled.div`
  max-width: 200px;
  cursor: pointer; 
  background: var(--gray-3);
  flex: 0 0 19.7%;
  text-align: center;
  margin: 0px 8px;
  transition: transform 300ms ease 100ms;
  color: var(--white);
  box-shadow: 0px 0px 14px -6px rgba(0,0,0,0.75);
`;

 
function MusicCard(props) {
  return (
    // <Link to={`/movies/${props.content.id}`}>
      <ALBUM>
        <img 
          src={`${props.content.album.images[0].url}`} 
          width="200" 
          alt={`${props.content.album.name} album art`} 
          className="card-img" 
        />
      </ALBUM>
    // </Link>
  )
}

export default MusicCard;