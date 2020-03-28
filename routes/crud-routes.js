const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/artist/create', function(req, res) {
  db.Artist.create(req.body);
})

module.exports = router;