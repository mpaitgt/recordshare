const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/artist/create', function(req, res) {
  db.Artist.create(req.body);
})

router.get('/check/:id', function(req, res) {
  console.log(req.params.id);
  db.Artist.findOne({ where: { id: req.params.id }})
    .then(x => {
      if (x) {
        res.send(true);
      } else {
        res.send(false);
      }
    })
})

module.exports = router;