import React from 'react';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
import NewAlbum from '../Components/NewAlbum';

function Upload() {
  return (
    <Container>
      <Text variant="h1">Upload</Text>
      <NewAlbum />
    </Container>
  )
}

export default Upload;