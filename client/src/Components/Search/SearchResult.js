import React from 'react';
import Path from '../Elements/Path';
import Text from '../Elements/Text';
import Image from '../Elements/Image';
import styled from '@emotion/styled';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  width: 100%;
`;
 
function SearchResult(props) {
  return (
    <Path to={`/artist/detail/${props.content.id}`}>
      <Item>
        {
          props.content.images
          ?
          <Image 
            src={props.content.images.length > 0 ? props.content.images[0].url : null} 
            width='150'
            height='150'
            alt={`${props.content.name} album art`} 
          />
          :
          null
        }
        <Text variant="p1">
          {props.content.name}
        </Text>
      </Item>
    </Path>
  )
}

export default SearchResult;