const express = require('express');
const passport = require('passport');
const db = require('../models');
const router = express.Router();

/* login users */
router.get('/login', function(req, res, next) {
  res.send('User has logged in.');
});

/* logout users */
router.get('/logout', function(req, res, next) {
  res.send('User has logged out');
})

/* google users */
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
  })
)

// google user redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/dashboard');
});

/* register users */
router.post('/register', function(req, res, next) {
  console.log(req.body);
    db.User.create(req.body)
    .then(res => {
      console.log(res)
      console.log('User has registered')
    })
    .catch(err => console.log(err));
});

module.exports = router;