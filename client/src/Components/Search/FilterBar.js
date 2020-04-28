import React, { useContext } from 'react';
import Button from '../Elements/Button';
import { PayloadContext } from '../Providers/PayloadProvider';
import spotify from '../../Utils/spotify';

function FilterBar() {
  const [
    payload, 
    setPayload, 
    results, 
    setResults,
    search,
    setSearch
  ] = useContext(PayloadContext);

  const searchArtists = e => {
    e.preventDefault();
    spotify.getArtists(search)
      .then(res => {
        if (res.data.length === 0) {
          setResults(false);
        } else {
          console.log(res.data);
          setPayload(res.data);
          setResults(true);
        }
      })
      .catch(err => console.log(err));
  }

  const searchAlbums = e => {
    e.preventDefault();
    spotify.getAlbums(search)
      .then(res => {
        if (res.data.length === 0) {
          setResults(false);
        } else {
          console.log(res.data);
          setPayload(res.data);
          setResults(true);
        }
      })
      .catch(err => console.log(err));
  }

  const searchTracks = e => {
    e.preventDefault();
    spotify.getTracks(search)
      .then(res => {
        if (res.data.length === 0) {
          setResults(false);
        } else {
          console.log(res.data);
          setPayload(res.data);
          setResults(true);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Button onClick={searchArtists}>Artists</Button>
      <Button onClick={searchAlbums}>Albums</Button>
      <Button onClick={searchTracks}>Tracks</Button>
    </div>
  )
}

export default FilterBar;