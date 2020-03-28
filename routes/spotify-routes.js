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

// get artist details by id
router.get('/music/artists/id/:id', function(req, res) {
  spotify.getArtist(req.params.id)
    .then(data => res.send(data.body))
    .catch(err => res.send(err));
})

// get artist albums
router.get('/music/artists/id/:id/albums', function(req, res) {
  spotify.getArtistAlbums(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err));
})

module.exports = router;