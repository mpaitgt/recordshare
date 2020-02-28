import React from 'react';
import './ContentCard.css'; 

function ContentCard(props) {
  let basePosterURL = 'https://image.tmdb.org/t/p/w185';
  var poster = `${basePosterURL}${props.content.poster_path}`;
  return (
    <div>
      {props.content.poster_path
      ?
      <div className="card"
        // style={{
        //   backgroundImage: `url(${poster})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat'
        // }}
      >
        <span className="card-title">{props.content.title}</span>
        <img src={poster} height="160" alt={`${props.content.title} movie poster`} className="card-img"></img>
      </div>
      :
      null
      }
    </div>
  )
}

export default ContentCard;