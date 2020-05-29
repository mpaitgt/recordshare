import React, {createRef} from 'react';
import ArtistAlbum from '../Components/NewAlbum/ArtistAlbum';
import AlbumImage from '../Components/NewAlbum/AlbumImage';
import AlbumStory from '../Components/NewAlbum/AlbumStory';
import ConfirmSubmission from '../Components/NewAlbum/ConfirmSubmission';
import Text from '../Components/Elements/Text';
import db from '../Utils/db';

class NewAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      album: '',
      artist: '',
      image: null,
      story: '',
      genres: []
    }
    this.formRef = createRef();
  }

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 })
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 })
  }  

  genres = ['Rock', 'Indie', 'Hip Hop', 'Folk', 'Alternative', 'Electronic', 'Pop', 'Punk', 'Classical'];

  renderGenres = this.genres.map((genre, i) => {
    return (
      <div key={i}>
        <input onChange={e => this.handleGenres(e)} type='checkbox' name='genres' value={genre} />
        <Text variant='label' for='genres'> {genre}</Text>
      </div>
    )
  })

  displayForm = () => {
    const { step, album, artist, image, story } = this.state;

    switch(step) {
      case 1:
        return (
          <ArtistAlbum 
            album={album} 
            artist={artist} 
            handleChange={this.handleChange} 
            renderGenres={this.renderGenres} 
            nextStep={this.nextStep}
          />
        )
      case 2:
        return (
          <AlbumImage 
            image={image}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            setState={this.setState}
          />
        )
      case 3:
        return (
          <AlbumStory 
            story={story}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        )
      case 4: 
      return (
        <ConfirmSubmission 
          state={this.state}
          onSubmit={this.onSubmit}
        />
      )
      default:
        return (
          <ArtistAlbum 
            album={album} 
            artist={artist} 
            handleChange={this.handleChange} 
            renderGenres={this.renderGenres} 
            nextStep={this.nextStep}
          />
        )
      }
  }

  handleGenres = e => {
    const { genres } = this.state;
    const { checked, name, value } = e.target;
    if (checked) {
      this.setState({ [name]: [...genres, value] });
    }
    if (!checked) {
      const newGenres = genres.filter(item => item !== value);
      this.setState({ [name]: newGenres })
    }
  }

  handleChange = e => {
    const { type, name, value, files } = e.target;
    // for type text
    if (type === 'text') this.setState({ [name]: value });
    // for type file
    if (type === 'file') this.setState({ [name]: files[0] });
  }

  onSubmit = e => {
    e.preventDefault();
    const { artist, album, image, story, genres } = this.state;
    let record = {
      artist: artist,
      title: album,
      image: image,
      story: story, 
      genres: genres
    };
    db.addAlbum(record);
  }

  render() {
    return (
      this.displayForm()
    )
  }
};

export default NewAlbum;