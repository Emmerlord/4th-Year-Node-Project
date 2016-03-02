var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Thread = require('../models/artists.js');
var Thread = require('../models/artworks.js');

/* GET artists listing. */
router.get('/', function(req, res, next) {
  mongoose.model('artworks').find(function(err,artworks){





      res.render('artworks', {  json: artworks });





 }).limit(20);
 });

 router.get('/:id', function(req, res, next) {

   var user_id = req.params.id;


   mongoose.model('artworks').find({'contributors.id':req.params.id},function(err,artworks){





       res.render('artworks', {  json: artworks });





  });
  });



module.exports = router;
