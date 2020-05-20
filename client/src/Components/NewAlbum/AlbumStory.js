import React from 'react';
import Text from '../Elements/Text';
import Input from '../Elements/Input';
import Card from '../Elements/Card';
import Button from '../Elements/Button';

function AlbumStory({story, nextStep, prevStep, handleChange}) {
  
  return (
    <Card>
      <Text variant="h2">Share your story</Text>
      <Input type="text" value={story} name="story" onChange={handleChange} />
      <Button onClick={nextStep}>Submit</Button>
      <Button onClick={prevStep}>Back</Button>
    </Card>
  )
}

export default AlbumStory;