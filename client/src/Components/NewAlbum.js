import React from 'react';
import Card from '../Components/Elements/Card';
import Input from '../Components/Elements/Input';
import Button from '../Components/Elements/Button';
import Text from '../Components/Elements/Text';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

class NewAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: '',
      artist: '',
      image: '',
      story: '',
      genres: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  genres = ['Classic Rock', 'Indie', 'Hip Hop', 'Folk', 'Alternative', 'Electronic', 'Pop', 'Punk', 'Classical'];

  renderGenres = this.genres.map(genre => {
    return (
      <div>
        <input type="checkbox" name={genre.toLowerCase().split(' ').join('-')} value={genre} />
        <Text variant="label" for={genre.toLowerCase().split(' ').join('-')}> {genre}</Text>
      </div>
    )
  })

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { album, artist, image, story, genres } = this.state;

    return (
      <Card>
        <div>
          <Input type="file" />
        </div>
        <div>
          <Text variant="label">Artist</Text>
          <Input type="text" name="artist" value={artist} onChange={this.handleChange} />
        </div>
        <div>
          <Text variant="label">Album</Text>
          <Input type="text" name="album" value={album} onChange={this.handleChange} />
        </div>
        <div>
          <Text variant="label">Your story</Text>
          <Input type="text" name="story" value={story} onChange={this.handleChange} />
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