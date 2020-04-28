import React from 'react';
import styled from '@emotion/styled';

const IMAGE = styled.img`
  box-shadow: 0px 0px 14px -6px rgba(0,0,0,0.75);
`;

function Image({src, alt, type}) {
  return (
    <IMAGE
      src={src} 
      alt={alt}
      type={type}
      style={
        type === 'artist'
        ?
        { borderRadius: '50%', width: '450px', margin: '20px 50px' }
        :
        type === 'music'
        ?
        { borderRadius: '5px', width: '250px' }
        :
        type === 'movie'
        ?
        { borderRadius: '5px', width: '150px' }
        :
        type === 'poster'
        ?
        { borderRadius: '5px', width: '350px' }
        :
        { borderRadius: '10px', width: '200px' }
      }
    />
  )
}

export default Image;