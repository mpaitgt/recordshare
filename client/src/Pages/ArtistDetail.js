import React from 'react';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Image from '../Components/Image';
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
    super(props);
    this.state = {
      artist: {},
      albums: [],
      loaded: false
    };
    // this.albums = this.albums.bind(this);
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
        this.setState({ artist: res.data })
        spotify.getArtistAlbums(this.props.match.params.id)
          .then(res => {
            this.setState({ albums: res.data.body.items, loaded: true })
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  // albums = this.state.albums.filter((album, index) => this.state.indexOf(album) === index);
  // filter by album type

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
        <div style={{ color: 'white', width: '60%', margin: '0 auto' }}>
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
                <Button>Add to Listen List</Button>
                <Text variant="h3">Albums by {artist.name}</Text>
                <div style={{display: 'grid', gridTemplateColumns:"33% 33% 33%"}}>
                {filteredAlbums.map(album => {
                  return (
                    <div>
                      <Image 
                        src={album.images[1].url} 
                        alt={`${album.name} cover art`} 
                        type="music" 
                      />
                      <Text variant="p1">{album.name}</Text>
                    </div>
                  )
                })}
                </div>
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