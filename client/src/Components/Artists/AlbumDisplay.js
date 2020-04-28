import React from 'react';
import Text from '../Elements/Text';
import Image from '../Elements/Image';
import Tile from '../Elements/Tile';
import moment from 'moment';
// import styled from '@emotion/styled';

function AlbumDisplay({album}) {
  console.log(album);
  return (
    <Tile>
      <div key={album.id}>
        <Image 
          src={album.images[0].url} 
          alt={`${album.name} cover art`} 
          type="music"
        />
        <Text variant="p1">
          {album.name}
        </Text>
        <Text variant="p1">
            {moment(album.release_date).format('YYYY')}
        </Text>
      </div>
    </Tile>
  )
}

export default AlbumDisplay;