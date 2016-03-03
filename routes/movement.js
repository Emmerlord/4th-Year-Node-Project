var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Thread = require('../models/artists.js');
var Thread = require('../models/artworks.js');


router.get('/:id', function(req, res, next) {
  var result = req.params.id;
  mongoose.model('artists').find({
    'movements.name': req.params.id
  }, function(err, artists) {


    res.render('movement', {
      json: artists,result
    });


  });
});

module.exports = router;
