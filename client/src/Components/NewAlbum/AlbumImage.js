import React from 'react';
import Input from '../Elements/Input';
import Text from '../Elements/Text';
import Card from '../Elements/Card';
import Button from '../Elements/Button';
import placeholder from '../../Images/placeholder.jpg';
import styled from '@emotion/styled';

const Image = styled.img`
  width: 250px;
  height: 250px;
`;

function AlbumImage({ image, handleChange, nextStep, prevStep }) {
  return (
    <Card>
      <Text variant="h2">Album image</Text>
      <Image src={!image ? placeholder : image} />
      <div>
        <Input 
          type="file" 
          name="image" 
          accept="image/png, image/jpeg"
          onChange={handleChange}
        />
      </div>
      <Button onClick={nextStep}>Continue</Button>
      <Button onClick={prevStep}>Back</Button>
    </Card>
  )
}

export default AlbumImage;