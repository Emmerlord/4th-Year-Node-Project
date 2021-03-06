var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jquery = require('jquery');
var routes = require('./routes/index');
var users = require('./routes/users');
var artists = require('./routes/artists');
var artworks = require('./routes/artworks');
var compression = require('compression');

var fs = require('fs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

  mongoose.connect('mongodb://127.0.0.1/tate')
//load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename){
  if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});


app.use('/', routes);
app.use('/artists',artists);
app.use('/artworks',artworks);
app.get('/search', function(req, res) {

   var regex = new RegExp(req.query["term"], 'i');
   var query = mongoose.model('artists').find({fc: regex}).limit(15);

      // Execute query in a callback and return users list
  query.exec(function(err, artists) {

      if (!err) {
         // Method to construct the json result set
         var result = artists;
         res.send(result, {
            'Content-Type': 'application/json'
         }, 200);
      } else {
         res.send(JSON.stringify(err), {
            'Content-Type': 'application/json'
         }, 404);
      }
   });
});


app.get('/artworks', function(req,res){
mongoose.model('artworks').find(function(err,artworks){
res.send(artworks);
}).limit(20);

});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
