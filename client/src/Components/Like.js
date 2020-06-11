import React, {useState} from 'react';
import {Text, Button} from '../Components/Elements';
import styled from '@emotion/styled';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as notLiked} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Like({ album }) {
  const [liked, setLiked] = useState(false);

  return (
    <span>
      {
        liked
        ?
        <FontAwesomeIcon size='1x' icon={faHeart} onClick={() => setLiked(false)}/>
        :
        <FontAwesomeIcon size='1x' icon={notLiked} onClick={() => setLiked(true)}/>
      }
      
      <Text variant="likes">{album.likes}</Text>
    </span>
  )
}

export default Like;