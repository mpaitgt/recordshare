import React from 'react';
import {Text, Card, Button, Image} from '../Elements';

const ConfirmSubmission = ({state, onSubmit}) => {

  const { artist, title, image, story, genres } = state;

  return (
    <Card>
      <Image src={URL.createObjectURL(image)} alt={`${title} by ${artist}`} width="300" height="300" />
      <Text variant="h1">{title}</Text>
      <Text variant="h2">by {artist}</Text>
      <Text variant="label-inline">{genres.join(', ')}</Text>
      <Text variant="p1">{story}</Text>
      <Button type="submit">Submit</Button>
    </Card>
  )
}

export default ConfirmSubmission;