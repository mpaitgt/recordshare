import React from 'react';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Image from '../Components/Image';
import Container from '../Components/Container';
import tmdb from '../Utils/tmdb';
import moment from 'moment';

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
      <Container>
        <div>
          <Image 
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
            alt={`${movie.title} movie poster`}
            type=""
          />
          <Text variant="h2">{movie.title}</Text>
          <Text variant="h4">Released: {moment(movie.release_date).format('MMMM D, YYYY')}</Text>
          <Text variant="p1">{movie.overview}</Text>
          <Button onClick={() => {this.props.history.goBack()}}>Back</Button>
          <Button onClick={this.add}>Add to Watch List</Button>
        </div>
      </Container>
    )
  }
}

export default Detail;