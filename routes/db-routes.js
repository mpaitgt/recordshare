const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinary');
const db = require('../models');
const dotenv = require('dotenv').config();
const multer  = require('multer')
const upload = multer({ dest: './uploads/' });
// const storage = multer.memoryStorage(); 
// const upload = multer({ storage: storage });

// get albums for display
router.get('/get-albums', function(req, res) {
  db.Album.find({})
    .then(data => res.send(data));
})

// image upload
router.post('/upload', upload.single('image'), function(req, res) {
  console.log(req.file);
  cloudinary.uploader.upload(req.file.path, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  res.send('form submitted successfully!');
})

// add an album
router.post('/user/add-album', upload.single('image'), function(req, res) {
  console.log(`${req.body}\n\n\n`);
  
  if (req.file) {
    console.log(req.file);
  } else {
    console.log('there was a problem uploading your file.');
  }
  // db.Album.create(req.body) 
    // .then(data => console.log(data));
})

module.exports = router;