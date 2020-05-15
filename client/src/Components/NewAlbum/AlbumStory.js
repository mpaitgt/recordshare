import React from 'react';
import Text from '../Elements/Text';
import Card from '../Elements/Card';
import Button from '../Elements/Button';

function AlbumStory(props) {
  
  return (
    <Card>
      <Text variant="h2">Share your story</Text>
      <textarea />
      <Button>Submit</Button>
      <Button onClick={props.prevStep}>Back</Button>
    </Card>
  )
}

export default AlbumStory;