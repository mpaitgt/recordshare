import React from 'react';
import {Text, Input, Card, Button} from '../Elements';

const StoryUpload = ({story, nextStep, prevStep, handleChange}) => {
  return (
    <Card>
      <Text variant="h2">Share your story</Text>
      <Input style="textarea" type="text" value={story} name="story" onChange={handleChange} />
      <Button onClick={nextStep}>Submit</Button>
      <Button onClick={prevStep}>Back</Button>
    </Card>
  )
}

export default StoryUpload;