import React from 'react';
import Text from '../Text';
import Image from '../Image';

function AlbumDisplay({album}) {
  return (
    <div key={album.id}>
      <Image 
        src={album.images[0].url} 
        alt={`${album.name} cover art`} 
        type="music"
      />
      <Text variant="p1">{album.name}</Text>
    </div>
  )
}

export default AlbumDisplay;