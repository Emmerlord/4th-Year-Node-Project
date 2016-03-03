var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Thread = require('../models/artists.js');
var Thread = require('../models/artworks.js');


/* GET artists listing. */
router.get('/', function(req, res, next) {
  mongoose.model('artists').find().distinct('movements.name',function(err, name) {

    res.render('index', {
      json: name
    });

  });
});

module.exports = router;
