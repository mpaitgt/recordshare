import React from 'react';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Image from '../Components/Image';
import Transition from '../Components/Transition';
import ResultsContainer from '../Components/ResultsContainer';
import spotify from '../Utils/spotify';
import usercrud from '../Utils/usercrud';
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
    super(props);
    this.state = {
      artist: {},
      albums: [],
      loaded: false
    };
  }

  crudButton = () => {
    
  }

  add = () => {
    const { artist } = this.state;
    usercrud.saveArtist({ artist: artist.name, id: artist.id });
  }

  componentDidMount() {
    spotify.getArtistById(this.props.match.params.id)
      .then(res => {
        this.setState({ artist: res.data })
        spotify.getArtistAlbums(this.props.match.params.id)
          .then(res => {
            this.setState({ albums: res.data.body.items, loaded: true })
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
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

    return (
      <Transition>
        <div style={{ color: 'white', width: '90%', margin: '0 auto' }}>
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
                    borderRadius: '50%',
                    boxShadow: '0px 0px 14px -6px rgba(0,0,0,0.75)',
                    
                  }}
                />
                <Text variant="h1">{artist.name}</Text>
                <Text variant="p1">{artist.genres.join(', ')}</Text>
                <Button onClick={() => {this.props.history.goBack()}}>Back</Button>
                <Button onClick={() => this.add() }>Add to Listen List</Button>
                <Text variant="h3">Albums by {artist.name}</Text>

                <ResultsContainer>
                {filteredAlbums.map(album => {
                  return (
                    <div key={album.id}>
                      <Image 
                        src={album.images[0].url} 
                        alt={`${album.name} cover art`} 
                        type="music"
                      />
                      <Text variant="p1">{album.name}</Text>
                    </div>
                  )
                })}
                </ResultsContainer>

              </div>
              :
              null
            }
          </div>
        </div>
      </Transition>
    )
  }
}

export default ArtistDetail;