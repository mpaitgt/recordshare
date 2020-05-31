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

// get albums by search query
router.get('/music/albums/query/:album', function(req, res) {
  spotify.searchAlbums(req.params.album)
    .then(data => res.send(data.body.albums.items))
    .catch(err => res.send(err));
})

// get artist details by id
router.get('/music/albums/id/:id', function(req, res) {
  let id = req.params.id;
  spotify.getAlbumTracks(id)
    .then(tracks => {
      res.send(tracks);
    })
    .catch(err => res.send(err));
})

module.exports = router;