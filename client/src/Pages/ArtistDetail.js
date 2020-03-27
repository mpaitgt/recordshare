import React from 'react';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Transition from '../Components/Transition';
import spotify from '../Utils/spotify';
import moment from 'moment';

let styles = {
  title: {
    fontFamily: 'var(--headerfont)'
  },
  detail: {
    fontFamily: 'var(--subfont)'
  }
}

class ArtistDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: {},
      loaded: false
    }
  }

  // add = e => {
  //   e.preventDefault();
  //   const { artist } = this.state;
  //   omdb.saveMovie({ title: movie.title, id: movie.id })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }

  componentDidMount() {
    spotify.getArtistById(this.props.match.params.id)
      .then(res => {
        this.setState({ artist: res.data, loaded: true })
        spotify.getArtistAlbums(this.props.match.params.id)
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
  
  render() {
    const { artist, loaded } = this.state;

    return (
      <Transition>
        <div style={{ color: 'white', width: '60%', margin: '0 auto' }}>
          {this.state.artist
          ?
          <div>
            <Text variant="h4">Artist Detail Page</Text>
            {
              loaded
              ?
              <div>
                <img 
                  src={artist.images[0].url} 
                  width="200" 
                  alt={`${artist.name} photo`} 
                  className="card-img" 
                  style={{ 
                    float: 'left',
                    marginRight: '32px',
                    borderRadius: '50%'
                  }}
                />
                <Text variant="h1">{artist.name}</Text>
                <Text variant="p1">{artist.genres.join(', ')}</Text>
                <Button onClick={() => {this.props.history.goBack()}}>Back</Button>
                <Button>Add to Listen List</Button>
                <Text variant="h3">Albums by {artist.name}</Text>
              </div>
              :
              null
            }
          </div>
          :
          <h1>Loading</h1>
          }
        </div>
      </Transition>
    )
  }
}

export default ArtistDetail;