import React from 'react';
// import {Link} from 'react-router-dom';
import './ContentCard.css'; 
// import moment from 'moment';
 
function ContentCard(props) {
  return (
    props.content.poster_path
    ?
    // <Link to={`/film/${props.content.id}`}>
    <div className="content-card">
      <img 
        src={`https://image.tmdb.org/t/p/w185${props.content.poster_path}`} 
        width="200" 
        alt={`${props.content.title} movie poster`} 
        className="card-img" 
      />
    </div>
    // </Link>
    :
    null
  )
}

export default ContentCard;