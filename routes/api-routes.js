const express = require('express');
const passport = require('passport');
const axios = require('axios');
const db = require('../models');
const router = express.Router();
require('dotenv').config();

// search OMDB for movies by term
router.get('/movies/search/:search', function(req, res) {
  const APIkey = process.env.REACT_APP_OMDB_KEY;
  const queryURL = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${req.params.search}`;
  axios.get(queryURL)
    .then(data => res.send(data.data.results))
    .catch(err => console.log(err));
})

// view the details of a movie using the id
router.get('/movies/id/:id', function(req, res) {
  const APIkey = process.env.REACT_APP_OMDB_KEY;
  const queryURL = `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${APIkey}&language=en-US`;
  axios.get(queryURL)
    .then(data => res.send(data.data))
    .catch(err => console.log(err));
})

// save a movie to your watch list
router.post('/movies/save', function(req, res) {
  // db.Movie.findOne({ where: { id: req.body.id } })
  //   .then(data => {res.send(data)})
  //   .catch(err => {console.log(err)})
  db.Movie.create(req.body)
})

router.delete('/movies/remove/:id', function(req, res) {
  db.Movie.destroy({ where: { id: req.params.id } });
})

// get user watch list
router.get('/movies/watch', function(req, res) {
  db.Movie.findAll()
    .then(data => { res.send(data) })
    .catch(err => { res.send(err) })
})

module.exports = router;