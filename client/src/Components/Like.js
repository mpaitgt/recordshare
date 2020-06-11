import React, {useState, useEffect} from 'react';
import {Text, Button} from '../Components/Elements';
import styled from '@emotion/styled';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as notLiked} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {css} from 'emotion';
import API from '../Utils';

function Like({ album }) {
  const [likes, setLikes] = useState(album.likes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // album.likes = album.likes;
  }, [likes])

  const like = (id) => {
    API.db.likeAlbum(id);
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  }

  return (
    <span>
      {
        liked
        ?
        <FontAwesomeIcon className={css`color: var(--orange-1)`} size='1x' icon={notLiked} onClick={() => like(album._id)} />
        :
        <FontAwesomeIcon className={css`color: var(--orange-1)`} size='1x' icon={faHeart} onClick={() => like(album._id)} />
      }
      <Text variant="likes">{likes}</Text>
    </span>
  )
}

export default Like;