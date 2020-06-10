import React from 'react';
import Text from '../Components/Elements/Text';
import styled from '@emotion/styled';

const Tag = styled.div`
  // display: inline;
  // background: var(--gray-5);
  // color: white;
  // margin-right: 12px;
  // padding: 5px 12px;
  // border-radius: 5px;
`;

function GenreTag({ genre }) {
  return (
    <Tag>
      <Text variant="tag">{genre}</Text>
    </Tag>
  )
}

export default GenreTag;