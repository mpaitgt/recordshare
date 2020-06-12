import React, {useEffect} from 'react';
import {Text, Card, Button, Image} from '../Elements';

const ConfirmSubmission = ({album}) => {

  useEffect(() => {
    console.log(album);
  }, [])

  return (
    <Card>
      <Image src={URL.createObjectURL(album.image)} alt={`${album.title} by ${album.artist}`} width="300" height="300" />
      <Text variant="h1">{album.title}</Text>
      <Text variant="h2">by {album.artist}</Text>
      <Text variant="label-inline">{album.genres.join(', ')}</Text>
      <Text variant="p1">{album.story}</Text>
      <Button type="submit">Submit</Button>
    </Card>
  )
}

export default ConfirmSubmission;