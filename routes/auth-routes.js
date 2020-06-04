const express = require('express');
const mongoose = require('mongoose');
const passport = require('../config/passport-setup');
const jwt = require('jsonwebtoken');
const settings = require('../config/settings');
const User = require('../models/User');
const router = express.Router();

// user login
router.post('/login', function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email: email }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    } else {
      user.comparePassword(password, function(err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is correct create a token
          const token = jwt.sign(user.toJSON(), settings.secret);
          // return appropriate information including token as json
          user.password = undefined;
          let response = { success: true, token: `JWT: ${token}`, user: user, msg: 'You are logged in!!' };
          console.log(response);
          res.json(response);
        } else {
          // user found, but password incorrect
          res.status(401).json({ success: false, msg: 'Authentication failed. Password is incorrect.' });
        }
      })
    }
  })
})

// user register
router.post('/register', function(req, res) {
  let user = new User(req.body);
  User.create(user)
    .then(data => console.log(data))
    .catch(err => console.log(err));
})

module.exports = router;