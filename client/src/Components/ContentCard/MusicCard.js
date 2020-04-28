import React from 'react';
import {Link} from 'react-router-dom';
import Text from '../Elements/Text';
import Tile from '../Elements/Tile';
import styled from '@emotion/styled';

const ALBUM = styled.div`
  max-width: 200px;
  cursor: pointer; 
  flex: 0 0 19.7%;
  text-align: center;
  margin: 0px 8px;
  transition: transform 300ms ease 100ms;
  color: var(--white);
  box-shadow: 0px 0px 14px -6px rgba(0,0,0,0.75);
  position: relative;
  display: inline-block;
`;

const TEXT = styled.div`
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // padding-top: 20px;
  height: 100%;
  background: #000000b1;
  transition: all 0.5s;
  &:hover {
    opacity: 0;
    transition: all 0.5s;
  }
`;

 
function MusicCard(props) {

  return (
    <Link to={`/artists/${props.content.id}`}>
      <Tile>
        <ALBUM>
          <img 
            src={props.content.images.length > 0 ? props.content.images[0].url : null} 
            width="200" 
            alt={`${props.content.name} album art`} 
            className="card-img" 
          />
          <TEXT>
            <Text variant="h4">
              {props.content.name}
            </Text>
          </TEXT>
        </ALBUM>
      </Tile>
    </Link>
  )
}

export default MusicCard;