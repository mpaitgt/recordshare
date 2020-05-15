import React from 'react';
import Card from '../Components/Elements/Card';
import Input from '../Components/Elements/Input';
import Button from '../Components/Elements/Button';
import Text from '../Components/Elements/Text';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  margin: 20px 0px;
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
  }

  genres = ['Classic Rock', 'Indie', 'Hip Hop', 'Folk', 'Alternative', 'Electronic', 'Pop', 'Punk', 'Classical'];

  renderGenres = this.genres.map(genre => {
    return (
      <div>
        <input onChange={e => this.handleGenres(e)} type='checkbox' name='genres' value={genre} />
        <Text variant='label' for='genres'> {genre}</Text>
      </div>
    )
  })

  handleGenres = e => {
    const { genres } = this.state;
    const { checked, name, value } = e.target;
    if (checked) {
      this.setState({ [name]: [...this.state.genres, value] });
    }
    if (!checked) {
      const newGenres = genres.filter(item => item !== value);
      this.setState({ [name]: newGenres })
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { album, artist, image, story } = this.state;
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