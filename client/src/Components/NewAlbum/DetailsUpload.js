import React from 'react';
import Input from '../Elements/Input';
import Text from '../Elements/Text';
import Card from '../Elements/Card';
import Button from '../Elements/Button';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  margin: 20px 0px;
`;

function DetailsUpload(props) {
  
  return (
    <Card align="center">
      <Text variant="h2">Share a new album</Text>
      <div>
        <Text variant="label-block">Album Title</Text>
        <Input type="text" name="title" value={props.title} onChange={props.handleChange} />      
      </div>
      <div>
        <Text variant="label-block">Artist</Text>
        <Input type="text" name="artist" value={props.artist} onChange={props.handleChange} />
      </div>
      <Text variant="label-block">Select genres:</Text>
      <Grid>
        {props.renderGenres}
      </Grid>
      <Button onClick={props.nextStep}>Continue</Button>
    </Card>
  )
}

export default DetailsUpload;