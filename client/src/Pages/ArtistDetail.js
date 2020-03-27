import React from 'react';
import Button from '../Components/Button';
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
      artist: {}
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
    console.log(this.props);
    spotify.getArtistById(this.props.match.params.id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  
  render() {
    const { artist } = this.state;
    return (
      <div style={{ color: 'white', width: '60%', margin: '0 auto' }}>
        {this.state.artist
        ?
        <div>
          {/* <img 
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
            width="200" 
            alt={`${movie.title} movie poster`} 
            className="card-img" 
            style={{ float: 'left',
            marginRight: '32px' }}
          /> */}
          <h1 style={styles.title}>Artist Detail Page</h1>
          {/* <Button onClick={() => {this.props.history.goBack()}}>Back</Button>
          <Button onClick={this.add}>Add to Watch List</Button> */}
        </div>
        :
        <h1>Loading</h1>
        }
      </div>
    )
  }
}

export default ArtistDetail;