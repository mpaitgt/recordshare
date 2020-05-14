import React from 'react';
import Text from '../Elements/Text';
import Image from '../Elements/Image';
import styled from '@emotion/styled';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
 
function SearchResult(props) {
  return (
      <Item>
        {
          props.content.images
          ?
          <Image 
            src={props.content.images.length > 0 ? props.content.images[0].url : null} 
            width='220'
            height='220'
            alt={`${props.content.name} album art`} 
          />
          :
          null
        }
        <Text variant="p1">
          {props.content.name}
        </Text>
      </Item>
  )
}

export default SearchResult;