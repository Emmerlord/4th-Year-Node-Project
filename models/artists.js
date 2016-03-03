var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movements = new Schema({
name: String,
id: Number
});

var artistsSchema = new Schema({
id: Number,
birthYear: String,
fc: String,
url: String,
date: String,
totalWorks: String,
movements: [movements],
birth: {
  place: {
    name: String
  }
},
artworks : {
  type: Schema.ObjectId,
  ref:'artworks'
          }
});

mongoose.model('artists', artistsSchema);
