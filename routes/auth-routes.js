const express = require('express');
const mongoose = require('mongoose');
const passport = require('../config/passport-setup');
const User = require('../models/User');
const router = express.Router();

// user register
router.post('/register', function(req, res) {
  console.log(req.body);
  let user = new User(req.body);
  User.create(user)
    .then(data => console.log(data))
    .catch(err => console.log(err));
})

// google oauth
router.get('/google', 
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

// google oauth callback
router.get('/google/callback',
  passport.authenticate('google', { 
    successRedirect: '/stories',
    failureRedirect: '/login' 
  }),
  function(req, res) {
    res.redirect('/');
  }
)

module.exports = router;