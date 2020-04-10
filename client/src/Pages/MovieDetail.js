import React, {useEffect, useState} from 'react';
import Transition from '../Components/Transition';
import MovieInfo from '../Components/Movies/MovieInfo';
import tmdb from '../Utils/tmdb';
import {updateMovie} from '../Redux/Reducers/rootReducer';
import {connect} from 'react-redux';

function Detail(props) {

  useEffect(() => {
    tmdb.getMovieById(props.match.params.id)
      .then(res => props.updateMovie(res.data))
      .catch(err => console.log(err));  
  }, []);

  setTimeout(() => console.log(props), 4000);
  // const add = () => {
  //   tmdb.saveMovie({ title: movie.title, id: movie.id })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }

  // const goBack = () => {
  //   props.history.goBack();
  // }

    return (
      <Transition>
        <MovieInfo movie={props.movie} />
      </Transition>
    )


}

const matchStateToProps = state => {
  return {
    movie: state.movie
  }
}

const matchDispatchToProps = dispatch => {
  return {
    updateMovie: (movie_data) => {
      dispatch(updateMovie(movie_data));
    }
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Detail);