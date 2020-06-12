import React, {useState, useEffect, useContext} from 'react';
import {Text} from '../Components/Elements';
import {UserContext} from '../Components/Providers/UserProvider';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as notLiked} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {css} from 'emotion';
import API from '../Utils';

function Like({ album }) {
  const [user, setUser] = useContext(UserContext);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // console.log(user);
  }, [])

  const like = (user, id) => {
    API.db.likeAlbum(user, id);
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
        <FontAwesomeIcon className={css`color: var(--orange-1)`} size='1x' icon={notLiked} onClick={() => like(user._id, album._id)} />
        :
        <FontAwesomeIcon className={css`color: var(--orange-1)`} size='1x' icon={faHeart} onClick={() => like(user._id, album._id)} />
      }
      <Text variant="likes">{album.likes.length}</Text>
    </span>
  )
}

export default Like;