const express = require('express');
const SpotifyWebAPI = require('spotify-web-api-node');
const router = express.Router();
require('dotenv').config();

const { REACT_APP_SPOTIFY_CLIENT_ID, REACT_APP_SPOTIFY_CLIENT_SECRET } = process.env;

const spotify = new SpotifyWebAPI({
  clientId: REACT_APP_SPOTIFY_CLIENT_ID,
  clientSecret: REACT_APP_SPOTIFY_CLIENT_SECRET
})

spotify.clientCredentialsGrant()
  .then(data => {
    spotify.setAccessToken(data.body.access_token);
  }, err => {
    console.log('Something went wrong when retrieving the access token', err.message);
  })

// get artist by search query
router.get('/music/artists/query/:artist', function(req, res) {
  spotify.searchArtists(req.params.artist)
    .then(data => res.send(data.body.artists.items))
    .catch(err => res.send(err));
})

// get albums by search query
router.get('/music/albums/query/:album', function(req, res) {
  spotify.searchAlbums(req.params.album)
    .then(data => res.send(data.body.albums.items))
    .catch(err => res.send(err));
})

// get tracks by search query
router.get('/music/tracks/query/:track', function(req, res) {
  spotify.searchTracks(req.params.track)
    .then(data => res.send(data.body.tracks.items))
    .catch(err => res.send(err));
})

// get artist details by id
router.get('/music/artists/id/:id', function(req, res) {
  let id = req.params.id;
  let obj = {};
  spotify.getArtist(id)
    .then(artistData => obj['artist'] = artistData.body)
    .then(() => spotify.getArtistAlbums(id))
    .then(albumData => {
      obj['albums'] = albumData.body.items
        .filter(album => album.album_type === 'album')
        .filter((album, index, array) => {
          return index === array.findIndex(sameAlbum => {
            return album.name === sameAlbum.name;
          })
        })
        res.send(obj);
    })
    .catch(err => res.send(err));
})

module.exports = router;