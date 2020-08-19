import React from 'react';
import {Text, Input, Card, Button} from '../Elements';

const StoryUpload = ({rating, step, setStep, handleChange}) => {
  return (
    <Card>
      <Text variant="h2">Set your rating:</Text>
      <Input type="number" value={rating} name="rating" onChange={handleChange} placeholder="10" />
      <Button onClick={() => setStep(step + 1)}>Submit</Button>
      <Button onClick={() => setStep(step - 1)}>Back</Button>
    </Card>
  )
}

export default StoryUpload;