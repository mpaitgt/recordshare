const express = require('express');
const passport = require('passport');
const axios = require('axios');
const db = require('../models');
const SpotifyWebAPI = require('spotify-web-api-node');
const qs = require('querystring');
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

router.get('/music/tracks/:artist', function(req, res) {
  spotify.searchArtists(req.params.artist)
    .then(data => {
      res.send(data.body.artists.items);
    })
    .catch(err => {
      res.send(err);
    })
})

module.exports = router;