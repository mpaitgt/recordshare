const express = require('express');
const router = express.Router();
const db = require('../models');

// get albums for display
router.get('/get-albums', function(req, res) {
  db.Album.find({})
    .then(data => res.send(data));
})

// add an album
router.post('/user/add-album', function(req, res) {
  console.log(req.body);
  db.Album.create(req.body) 
    .then(data => console.log(data));
})

module.exports = router;