import React, {useEffect} from 'react';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
// import styled from '@emotion/styled';
// import spotify from '../Utils/spotify';

function AlbumDetails(props) {
  // const [album, setAlbum] = useState(null);
  useEffect(() => {
    setTimeout(() => console.log(props), 3000);
  }, [])
  // useEffect(() => {
  //   spotify.getAlbums(search)
  //     .then(res => {
  //       let album = res.data.filter(item => item.artists[0].name === artist && item.type === 'album');
  //       console.log(album);
  //       spotify.getAlbumTracks(album[0].id)
  //         .then(tracks => console.log(tracks.data))
  //     })
  //     .catch(err => console.log(err))
  // }, []);

  return (
    <Container>
      <Text variant="h1">Album Details</Text>
    </Container>
  )
}

export default AlbumDetails;