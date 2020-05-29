import React from 'react';
import Text from '../Elements/Text';
import Card from '../Elements/Card';
import Button from '../Elements/Button';

function ConfirmSubmission({state, onSubmit}) {

  const { artist, album, image, story, genres } = state;

  return (
    <Card>
      <img src={URL.createObjectURL(image)} alt={`${album} by ${artist}`} width="300" height="300" />
      <Text variant="h1">{album}</Text>
      <Text variant="h2">by {artist}</Text>
      <Text variant="label">{genres.join(', ')}</Text>
      <Text variant="p1">{story}</Text>
      <Button type="submit">Submit</Button>
    </Card>
  )
}

export default ConfirmSubmission;