import React, {useEffect, useContext} from 'react';
import Button from '../Elements/Button';
import {Text, Image} from '../Elements';
import Like from '../Like';
import {UserContext} from '../Providers/UserProvider';
import GenreTag from '../GenreTag';
import styled from '@emotion/styled';
import spotify from '../../Utils/spotify';
import helpers from '../../Utils/helpers';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 20px;
`;

function GridDisplay({ display, album }) {
  const [user, setUser] = useContext(UserContext);
  const { image, title, artist, genres, story, date_added } = album;

  // const recordDetails = (title, artist) => {
  //   spotify.getAlbums(title)
  //     .then(res => {
  //       let albumData = res.data.filter(item => {
  //         return item.album_type === 'album' && item.artists[0].name === artist;
  //       });
  //       setRecord(albumData);
  //       return albumData[0];
  //     })
  //     .then(data => {
  //       window.location.replace(`/albums/id/${data.id}`)
  //     })
  //     .catch(err => console.log(err));
  // }

  // useEffect(() => {
  //   console.log(album);
  // }, [])

  return (
    // <Grid>
      <Image 
        style={{ justifySelf: 'center', margin: '20px' }} 
        width="200" 
        height="200"
        src={image.url} 
        alt={`${album.title} by ${artist}`} 
      />
    // </Grid>
  )
}

// const GridItem = (album) => {
//   return (

//   )
// }

export default GridDisplay;