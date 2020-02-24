const express = require('express');
const db = require('../models');
const router = express.Router();

/* GET users login. */
router.get('/login', function(req, res, next) {
  // res.send('Login');
});

/* GET users register. */
router.get('/register', function(req, res, next) {
  // res.send('Register');
});

/* POST users register handler. */
router.post('/register', function(req, res, next) {
  db.User.create(req.body)
    .then(res => console.log(res))
    .catch(err => console.log(err));
});


module.exports = router;
