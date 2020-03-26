const express = require('express');
const passport = require('passport');
const db = require('../models');
const router = express.Router();

/* login users */
router.post('/login', 
  passport.authenticate('local'),
  function(req, res) {
    console.log(req.body);
    res.send('User has logged in.');
  }
);

/* logout users */
router.get('/logout', function(req, res, next) {
  res.send('User has logged out');
})

/* register users */
router.post('/register', function(req, res, next) {
    db.User.create(req.body)
    .then(res => {
      console.log('User has registered');
    })
    .catch(err => console.log(err));
});

module.exports = router;