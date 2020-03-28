import React from 'react';
import Button from '../Components/Button';
import tmdb from '../Utils/tmdb';
import moment from 'moment';

let styles = {
  title: {
    fontFamily: 'var(--headerfont)'
  },
  detail: {
    fontFamily: 'var(--subfont)'
  }
}

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
  }

  add = e => {
    e.preventDefault();
    const { movie } = this.state;
    tmdb.saveMovie({ title: movie.title, id: movie.id })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    tmdb.getMovieById(this.props.match.params.id)
      .then(res => { 
        console.log(res.data);
        this.setState({ movie: res.data })
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    const { movie } = this.state;
    return (
      <div style={{ color: 'white', width: '60%', margin: '0 auto' }}>
        {this.state.movie
        ?
        <div>
          <img 
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
            width="200" 
            alt={`${movie.title} movie poster`} 
            className="card-img" 
            style={{ float: 'left',
            marginRight: '32px' }}
          />
          <h1 style={styles.title}>{movie.title}</h1>
          <h3 style={styles.detail}>Released: {moment(movie.release_date).format('MMMM D, YYYY')}</h3>
          <p style={styles.detail}>{movie.overview}</p>
          <Button onClick={() => {this.props.history.goBack()}}>Back</Button>
          <Button onClick={this.add}>Add to Watch List</Button>
        </div>
        :
        <h1>Loading</h1>
        }
      </div>
    )
  }
}

export default Detail;