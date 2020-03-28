import React from 'react';
import Transition from '../Components/Transition';
import MovieInfo from '../Components/Movies/MovieInfo';
import tmdb from '../Utils/tmdb';

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
  }

  add = () => {
    const { movie } = this.state;
    tmdb.saveMovie({ title: movie.title, id: movie.id })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  goBack = () => {
    this.props.history.goBack();
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
      <Transition>
        <MovieInfo movie={movie} back={this.goBack} />
      </Transition>
    )
  }
}

export default Detail;