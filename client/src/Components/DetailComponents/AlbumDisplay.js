import React from 'react';
import Text from '../Elements/Text';
import Image from '../Elements/Image';
import moment from 'moment';
import styled from '@emotion/styled';

const TitleDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function AlbumDisplay({album}) {
  return (
      <div key={album.id}>
        <Image 
          src={album.images[0].url} 
          alt={`${album.name} cover art`} 
          type="music"
        />
        <TitleDate>
          <Text variant="p1">
            {album.name}
          </Text>
          <Text variant="p1">
              {moment(album.release_date).format('YYYY')}
          </Text>
        </TitleDate>
      </div>
  )
}

export default AlbumDisplay;