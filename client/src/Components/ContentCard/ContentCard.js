import React from 'react';
import './ContentCard.css'; 
import moment from 'moment';

function ContentCard(props) {
  return (
    props.content.poster_path
    ?
    <div className="card">
      <img 
        src={`https://image.tmdb.org/t/p/w185${props.content.poster_path}`} 
        width="200" 
        alt={`${props.content.title} movie poster`} 
        className="card-img" 
      />
    </div>
    :
    null
  )
}

export default ContentCard;

