import React from 'react';
import Text from '../Text';
import Button from '../Button';
import Image from '../Image';
import moment from 'moment';

function MovieInfo({ movie, add, back }) {
  return (
    <div>
      <Image 
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
        alt={`${movie.title} movie poster`}
        type="movie"
      />
      <Text variant="h2">{movie.title}</Text>
      <Text variant="h4">Released: {moment(movie.release_date).format('MMMM D, YYYY')}</Text>
      <Text variant="p1">{movie.overview}</Text>
      <Button onClick={back}>Back</Button>
      <Button onClick={add}>Add to Watch List</Button>
    </div>
  )
}

export default MovieInfo;