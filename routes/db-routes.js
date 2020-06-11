const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinary');
const db = require('../models');
const multer  = require('multer')
const upload = multer({ dest: './uploads/' });

// get all albums for display
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

// get albums by query term
router.get('/search/albums/:query', function(req, res) {
  let query = new RegExp(req.params.query, 'i')
  db.Album.find({ $or: [{artist: query}, {title: query}] })
    .then(data => {
      if (data) res.json(data);
      if (!data) res.json({ msg: `There does not seem to be any results that match your search.` })
  })
    .catch(err => res.json(err))
})

// like an album
router.post(`/like/album/:id`, async function(req, res) {
  let id = { _id: req.params.id };
  let update = { $inc: { likes: 1 } };
  let album = await db.Album.findOneAndUpdate(id, update)
  console.log(album)
  // album.update({likes: likes + 1});
  // album.save;
})

module.exports = router;