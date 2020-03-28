import React from 'react';
import Container from '../Components/Container';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Image from '../Components/Image';
import Transition from '../Components/Transition';
import ArtistInfo from '../Components/Artists/ArtistInfo';
import AlbumDisplay from '../Components/Artists/AlbumDisplay';
import ResultsContainer from '../Components/ResultsContainer';
import spotify from '../Utils/spotify';
import usercrud from '../Utils/usercrud';
import moment from 'moment';

class ArtistDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      albums: [],
      loaded: false
    };
  }

  componentDidMount() {
    spotify.getArtistById(this.props.match.params.id)
      .then(res => {
        this.setState({ artist: res.data })
        spotify.getArtistAlbums(this.props.match.params.id)
          .then(res => this.setState({ albums: res.data.body.items, loaded: true }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  add = () => {
    const { artist } = this.state;
    usercrud.saveArtist({ artist: artist.name, id: artist.id });
  }

  render() {
    const { artist, albums, loaded } = this.state;

    const filteredAlbums = albums
      .filter(item => item.album_type === 'album')
      .filter((item, index, array) => {
      return index === array.findIndex(sameItem => {
        return item.name === sameItem.name
      })
    })

    const display = filteredAlbums.map(album => {
      return (
        <AlbumDisplay album={album} />
      )
    })

    return (
      <Transition>
        <Text variant="h4">Artist Detail Page</Text>
        {
          loaded
          ?
          <div>
            <ArtistInfo artist={artist} onClick={ () => this.add() }/>
            <Text variant="h3">Albums by {artist.name}</Text>
            <ResultsContainer>
              {display}
            </ResultsContainer>
          </div>
          :
          null
        }
      </Transition>
    )
  }
}

export default ArtistDetail;