import React from 'react';
import styled from '@emotion/styled';

const IMAGE = styled.img`
  box-shadow: 0px 0px 14px -6px rgba(0,0,0,0.75);
`;

function Image({src, alt, type, width, height}) {
  return (
    <IMAGE
      src={src} 
      alt={alt}
      type={type}
      width={width ? width : '150'}
      height={height ? height : '150'}
    />
  )
}

export default Image;