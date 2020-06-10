import React from 'react';
import {Text, Container} from '../Components/Elements';
import NewAlbum from '../Components/NewAlbum';

const Upload = () => {
  return (
    <Container>
      <Text variant="h1">Upload</Text>
      <NewAlbum />
    </Container>
  )
}

export default Upload;