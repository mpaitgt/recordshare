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
          const token = jwt.sign(user.toJSON(), settings.secret);
          user.password = undefined;
          let response = { success: true, token: `JWT: ${token}`, user: user, msg: 'You are logged in!!' };
          res.json(response);
        } else {
          res.status(401).json({ success: false, msg: 'Authentication failed. Password is incorrect.' });
        }
      })
    }
  })
})

// user register
router.post('/register', function(req, res) {
  let user = new User(req.body);
  user.save();
})

module.exports = router;