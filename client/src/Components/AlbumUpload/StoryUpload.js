import React from 'react';
import {Text, Input, Card, Button} from '../Elements';

const StoryUpload = ({story, step, setStep, handleChange}) => {
  return (
    <Card>
      <Text variant="h2">Share your story</Text>
      <Input style="textarea" type="text" value={story} name="story" onChange={handleChange} />
      <Button onClick={() => setStep(step + 1)}>Submit</Button>
      <Button onClick={() => setStep(step - 1)}>Back</Button>
    </Card>
  )
}

export default StoryUpload;