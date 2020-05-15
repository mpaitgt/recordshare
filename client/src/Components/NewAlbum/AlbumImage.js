import React, {useState} from 'react';
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

function AlbumImage(props) {
  const [image, setImage] = useState('');
  
  const handleChange = e => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Card>
      <Text variant="h2">Album image</Text>
      <Image src={!image ? placeholder : image} />
      <div>
        <Input 
          type="file" 
          name="file" 
          accept="image/png, image/jpeg"
          onChange={handleChange}
        />
      </div>
      <Button onClick={props.nextStep}>Continue</Button>
      <Button onClick={props.prevStep}>Back</Button>
    </Card>
  )
}

export default AlbumImage;