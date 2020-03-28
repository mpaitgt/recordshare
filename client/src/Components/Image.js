import React from 'react';
import styled from '@emotion/styled';

const IMAGE = styled.img`
  box-shadow: 0px 0px 14px -6px rgba(0,0,0,0.75);
  border: 1px solid var(--dark-green);
`;

function Image({src, alt, type}) {
  return (
    <IMAGE
      src={src} 
      alt={alt}
      type={type}
      width={type === 'album' ? '200' : type === 'movie' ? '150' : '200'}
    />
  )
}

export default Image;