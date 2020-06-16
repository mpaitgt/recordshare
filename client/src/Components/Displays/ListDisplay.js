import React, {useEffect, useContext} from 'react';
import {Text, Image, Button} from '../Elements';
import Like from '../Like';
import {PayloadContext} from '../Providers/PayloadProvider';
import {UserContext} from '../Providers/UserProvider';
import GenreTag from '../GenreTag';
import styled from '@emotion/styled';
import spotify from '../../Utils/spotify';
import helpers from '../../Utils/helpers';

const Flex = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  grid-gap: 20px;
  // border-top: 1px solid var(--gray-5);
  // border-bottom: 2px solid var(--gray-5);
  // border-right: 4px solid var(--gray-5);
  // border-left: 1px solid var(--gray-5);
  box-shadow: 4px 2px 4px 2px rgba(0,0,0,0.1);
  padding: 24px 0px;
  background: var(--whiter);
  margin: 20px 0px;
`;

const Content = styled.div`
  max-width: 600px;
`;

function ListDisplay({ display, album }) {
  const [user, setUser] = useContext(UserContext);
  const [record, setRecord] = useContext(PayloadContext);
  const { image, title, artist, genres, story, date_added } = album;

  useEffect(() => {
    console.log(album)
  }, [])

  const recordDetails = (title, artist) => {
    spotify.getAlbums(title)
      .then(res => {
        let albumData = res.data.filter(item => {
          return item.album_type === 'album' && item.artists[0].name === artist;
        });
        setRecord(albumData);
        return albumData[0];
      })
      .then(data => {
        window.location.replace(`/albums/id/${data.id}`)
      })
      .catch(err => console.log(err));
  }

  return (
    <Flex>
      <Image 
        style={{ justifySelf: 'center', margin: '20px' }} 
        width="300" 
        height="300"
        src={image.url} 
        alt={`${album.title} by ${artist}`} 
      />
      <div>
        <Text variant="h2">{title}</Text>
        <Text variant="h3">by {artist}</Text>
        <div style={{ display: 'flex' }}>
        {
          genres.map(genre => {
            return <GenreTag genre={genre} />
          })
        }
        </div>
        <Content>
          <Text variant="p1">{story}</Text>
        </Content>
        <div>
          {/* { user ? <Like album={album} /> : null } */}
          <Button margin="0px 20px 0px 0px" display="inline" onClick={() => recordDetails(title, artist)}>Details</Button>
          <Button margin="0px 20px 0px 0px" display="inline">Share your story</Button>
        </div>
      <Text variant="description">Added {helpers.convertDate(date_added)} by </Text>
      </div>
    </Flex>
  )
}

export default ListDisplay;