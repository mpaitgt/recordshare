const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cloudinary = require('../config/cloudinary');
const db = require('../models');
const multer  = require('multer')
const upload = multer({ dest: './uploads/' });

// get all albums for display in feed
router.get('/get-albums', function(req, res) {
  db.Album.find({})
    .then(data => res.send(data));
})

// add an album
router.post('/user/add-album', upload.single('image'), async function(req, res) {
  try {
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
    console.log('============================================')
    console.log(req.body)
    let record = {
      artist: req.body.artist,
      title: req.body.title,
      story: req.body.story,
      genres: req.body.genres.split(','),
      image: image,
      user_id: req.body.user_id
    }
    console.log('============================================')
    db.Album.create(record) 
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  catch(err) {
    console.log(err);
  }
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
router.post(`/like/album/:user/:id`, async function(req, res) {
  let user_id = req.params.user;
  let album_id = req.params.id;
  console.log(user_id, album_id);
  // when user clicks to like this album
  // we search the db for this user
  db.User.findOneAndUpdate(
    { _id: user_id }, 
    { $push: { likes: mongoose.Types.ObjectId(album_id) } }, 
    { new: true, upsert: true }
  ).then(res => console.log(res));
});

// filter albums by genre
router.post('/albums/genres/:term', function(req, res) {
  let term = req.params.term;
  console.log(term);
  db.Album.find({ genres: term })
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

// get all images
router.get('/get-images', function(req, res) {
  db.Album.find({})
    .then(data => {
      console.log(res);
      let images = [];
      for (let i = 0; i < data.length; i++) {
        images.push(data[i].image);
      }
      res.send(images);
    })
})

module.exports = router;