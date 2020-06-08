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

  // const onSubmit = e => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('image', image);
  //   fetch('/api/upload', { method: 'POST', body: formData })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.error(err));
  // }

  return (
    <Card>
      <Text variant="h2">Album image</Text>
      <Image src={!image ? placeholder : URL.createObjectURL(image)} />
      <Input type="file" name="image" onChange={handleChange} />
      <Button onClick={nextStep}>Continue</Button>
      <Button onClick={prevStep}>Back</Button>
    </Card>
  )
}

export default AlbumImage;