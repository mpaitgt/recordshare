import React from 'react';
import Path from '../Elements/Path';
import Text from '../Elements/Text';
import Tile from '../Elements/Tile';
import styled from '@emotion/styled';

const ALBUM = styled.div`
  max-width: 140px;
  cursor: pointer; 
  text-align: center;
  margin: 0px 8px;
  color: var(--white);
  box-shadow: 0px -4px 10px -6px rgba(0,0,0,0.75);
  position: relative;
  display: inline-block;
`;

const TEXT = styled.div`
  z-index: 999;
  height: 100%;
  transition: all 0.5s;
  width: auto;
  margin: 0 auto;
`;

 
function MusicCard(props) {

  return (
    <Path to={`/artists/${props.content.id}`}>
      <Tile>
        <ALBUM>
          <img 
            src={props.content.images.length > 0 ? props.content.images[0].url : null} 
            width="200" 
            height="200"
            alt={`${props.content.name} album art`} 
            className="card-img" 
          />
        </ALBUM>
      </Tile>
      <TEXT>
        <Text variant="p1">
          {props.content.name}
        </Text>
      </TEXT>
    </Path>
  )
}

export default MusicCard;