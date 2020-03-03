const express = require('express');
const passport = require('passport');
const axios = require('axios');
const db = require('../models');
const router = express.Router();
require('dotenv').config();

// search OMDB for movies
router.get('/movies/search/:search', function(req, res) {
  const APIkey = process.env.REACT_APP_OMDB_KEY;
  const queryURL = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${req.params.search}`;
  axios.get(queryURL)
    .then(res => res.send(res.data.results))
    .catch(err => console.log(err));
})

router.get('/movies/id/:id', function(req, res) {
  const APIkey = process.env.REACT_APP_OMDB_KEY;
  const queryURL = `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${APIkey}&language=en-US`;
  axios.get(queryURL)
    .then(res => res.send(res.data))
    .catch(err => console.log(err));
})

module.exports = router;