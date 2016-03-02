var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistsSchema = new Schema({
id: Number,
birthYear: String,
fc: String,
url: String,
date: String,
totalWorks: String,
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
