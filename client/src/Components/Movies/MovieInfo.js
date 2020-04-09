import React from 'react';
import Text from '../Text';
import Button from '../Elements/Button';
import Image from '../Image';
import moment from 'moment';
import styled from '@emotion/styled';

const CONTAINER = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TEXT = styled.div`
  margin-left: 60px;
`;

function MovieInfo({ movie, add, back }) {
  return (
    <CONTAINER>
      <Image 
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
        alt={`${movie.title} movie poster`}
        type="poster"
      />
      <TEXT>
        <Text variant="h2">{movie.title}</Text>
        <Text variant="h4">Released: {moment(movie.release_date).format('MMMM D, YYYY')}</Text>
        <Text variant="p1">{movie.overview}</Text>
        <Button onClick={back}>Back</Button>
        <Button onClick={add}>Add to Watch List</Button>
      </TEXT>
    </CONTAINER>
  )
}

export default MovieInfo;