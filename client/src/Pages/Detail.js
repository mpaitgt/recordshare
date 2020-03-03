import React from 'react';
import Button from '../Components/Button/Button';
import omdb from '../Utils/omdb';
import moment from 'moment';

class Detail extends React.Component {
  state = {
    movie: {}
  }

  back = e => {
    e.preventDefault();
  }

  add = e => {
    e.preventDefault();
    const { movie } = this.state;
    omdb.saveMovie({ title: movie.title, id: movie.id })
      .then(res => {console.log('saved!')})
  }

  componentDidMount() {
    omdb.getMovieById(this.props.match.params.id)
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
      <div style={{ color: 'white', width: 'auto', margin: '0 auto' }}>
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
          <h1>{movie.title}</h1>
          <h3>Released: {moment(movie.release_date).format('MMMM D, YYYY')}</h3>
          <p>{movie.overview}</p>
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