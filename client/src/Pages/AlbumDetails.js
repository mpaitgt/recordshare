import React, {useState, useEffect} from 'react';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
// import styled from '@emotion/styled';
import spotify from '../Utils/spotify';

function AlbumDetails(props) {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    spotify.getAlbumTracks(props.match.params.id)
      .then(res => {
        // console.log(res.data.body);
        setTracks(res.data.body);
      })
      .catch(err => console.log(err))
  }, [props.match.params.id]);

  return (
    <Container>
      <Text variant="h1">Album Details</Text>
      {
        tracks
        ?
        tracks.items.map(track => {
          return <Text key={track.track_number} variant="p1">{track.name}</Text>
        })
        :
        null
      }
    </Container>
  )
}

export default AlbumDetails;