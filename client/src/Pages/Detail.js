import React from 'react';
import Text from '../Components/Elements/Text';
import Transition from '../Components/Transition';
import ArtistInfo from '../Components/DetailComponents/ArtistInfo';
import AlbumDisplay from '../Components/DetailComponents/AlbumDisplay';
import ResultsContainer from '../Components/ResultsContainer';
import Container from '../Components/Elements/Container';
import spotify from '../Utils/spotify';
// import usercrud from '../Utils/usercrud';

class ArtistDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      albums: [],
      relatedArtists: [],
      loaded: false
    };
  }

  componentDidMount() {
    spotify.getArtistById(this.props.match.params.id)
      .then(res => {
        this.setState({ 
          artist: res.data.artist, 
          albums: res.data.albums, 
          loaded: true 
        })
      })
      .catch(err => console.log(err));
  }

  add = () => {
    const { artist } = this.state;
    // usercrud.saveArtist({ artist: artist.name, id: artist.id });
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { artist, albums, loaded } = this.state;

    const display = albums.map(album => {
      return (
        <AlbumDisplay album={album} />
      )
    })

    return (
      <Container>
        {
          loaded
          ?
          <div>
            <ArtistInfo artist={artist} add={this.add} back={this.goBack} />
            <Text variant="h3">Albums by {artist.name}</Text>
            <ResultsContainer>
              {display}
            </ResultsContainer>
          </div>
          :
          null
        }
      </Container>
    )
  }
}

export default ArtistDetail;