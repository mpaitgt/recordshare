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
  let id = req.params.id;
  let obj = {};
  spotify.getArtist(id)
    .then(artistData => obj['artist'] = artistData.body)
    .then(() => spotify.getArtistAlbums(id))
    .then(albumData => obj['albums'] = albumData.body.items)
    .then(() => spotify.getArtistAlbums(id))
    .then(trackData => {
      obj['tracks'] = trackData.body.items;
      res.send(obj);
    })
    .catch(err => res.send(err));
})

module.exports = router;