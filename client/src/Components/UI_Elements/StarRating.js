import React from 'react';
import {Text} from '../Elements';
import {faStar as fullStar} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {css} from 'emotion';

function StarRating({ rating }) {

  let renderStars = () => {
    let stars = 10;

  }

  return (
    <div className={css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      text-align: center;
      padding: 10px;
      margin-bottom: 10px;
      background: var(--orange-2);
      border-radius: 50%;
      -webkit-box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
      box-shadow: 0px 11px 20px -24px rgba(0,0,0,0.75);
      background: linear-gradient(90deg, var(--orange-1), var(--orange-2));
      
    `}>
      <Text variant="rating">
        {
          rating === 10
          ?
          Number.parseFloat(rating).toFixed(0)
          :
          Number.parseFloat(rating).toFixed(1)
        }
      </Text>
    </div>
  )
}

export default StarRating;