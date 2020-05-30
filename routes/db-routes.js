const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinary');
const db = require('../models');
const multer  = require('multer')
const upload = multer({ dest: './uploads/' });

// get albums for display
router.get('/get-albums', function(req, res) {
  db.Album.find({})
    .then(data => res.send(data));
})

// add an album
router.post('/user/add-album', upload.single('image'), async function(req, res) {
  let dataRetrieval = cloudinary.uploader.upload(req.file.path, function(err, result) {
    if (err) throw err;
    return result;
  })
  let image = await dataRetrieval
    .then(data => {
      return {
        url: data.url,
        id: data.public_id
      }
    })
  let record = {
    artist: req.body.artist,
    title: req.body.title,
    story: req.body.story,
    genres: req.body.genres.split(','),
    image: image
  }
  db.Album.create(record) 
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

module.exports = router;