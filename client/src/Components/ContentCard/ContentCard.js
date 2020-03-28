import React from 'react';
import {Link} from 'react-router-dom';
import Image from '../Image';
import './ContentCard.css'; 
 
function ContentCard(props) {
  return (
    props.content.poster_path
    ?
    <Link to={`/movies/${props.content.id}`}>
      <div className="content-card">
        <Image 
          src={`https://image.tmdb.org/t/p/w185${props.content.poster_path}`} 
          type="movie"
          alt={`${props.content.title} movie poster`} 
          className="card-img" 
        />
      </div>
    </Link>
    :
    null
  )
}

export default ContentCard;