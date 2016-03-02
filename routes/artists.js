var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Thread = require('../models/artists.js');
var Thread = require('../models/artworks.js');


/* GET artists listing. */
router.get('/', function(req, res, next) {
  mongoose.model('artists').find(function(err, artists) {

    res.render('artists', {
      json: artists
    });

  });
});


/* GET artists listing. */
router.get('/:id', function(req, res, next) {
  mongoose.model('artists').find({
    id: req.params.id
  }, function(err, artists) {


    res.render('artists', {
      json: artists
    });


  });
});




module.exports = router;
