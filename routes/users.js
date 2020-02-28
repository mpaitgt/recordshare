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
router.get('/google/redirect', (req, res) => {
  res.send('You reached the callback URI.');
})

/* register users */
router.post('/register', function(req, res, next) {
  console.log(req.body);

  // check required fields
  // if (!name || !email || !password) {
  //   errors.push({ msg: 'Please fill in all fields' });
  //   res.send({errors});
  // } else {
    // otherwise, register the user
    db.User.create(req.body)
    .then(res => {
      console.log(res)
      console.log('User has registered')
    })
    .catch(err => console.log(err));
  // }
});

module.exports = router;