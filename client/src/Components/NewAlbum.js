import React from 'react';
import Card from '../Components/Elements/Card';
import Input from '../Components/Elements/Input';
import Button from '../Components/Elements/Button';
import Text from '../Components/Elements/Text';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;

class NewAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      image: '',
      story: '',
      genres: []
    }
  }

  genres = ['Classic Rock', 'Indie', 'Hip Hop', 'Folk', 'Alternative', 'Electronic', 'Pop', 'Punk', 'Classical'];

  renderGenres = this.genres.map(genre => {
    return (
      <div>
        <input type="checkbox" name={genre.toLowerCase()} value={genre} />
        <Text variant="label" for={genre.toLowerCase()}> {genre}</Text>
      </div>
    )
  })

  render() {
    const { title, artist, image, story, genres } = this.state;

    return (
      <Card>
        <div>
          <Input type="file" />
        </div>
        <div>
          <Text variant="label">Artist</Text>
          <Input type="text" />
        </div>
        <div>
          <Text variant="label">Album</Text>
          <Input type="text" />
        </div>
        <div>
          <Text variant="label">Your story</Text>
          <Input type="text" />
        </div>
        <div>
          <Text variant="label">Select genres:</Text>
          <Grid>
            {this.renderGenres}
          </Grid>
        </div>
        <Button>Submit</Button>
      </Card>
    )
  }
};

export default NewAlbum;