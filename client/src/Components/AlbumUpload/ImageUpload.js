import React from 'react';
import {Input, Text, Card, Button, Image} from '../Elements';
import placeholder from '../../Images/placeholder.jpg';

const ImageUpload = ({ image, handleChange, step, setStep }) => {
  return (
    <Card>
      <Text variant="h2">Album image</Text>
      <Image src={!image ? placeholder : URL.createObjectURL(image)} width="250" height="250" />
      <Input type="file" name="image" onChange={handleChange} />
      <Button onClick={() => setStep(step + 1)}>Continue</Button>
      <Button onClick={() => setStep(step - 1)}>Back</Button>
    </Card>
  )
}

export default ImageUpload;