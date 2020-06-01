const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', 
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

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