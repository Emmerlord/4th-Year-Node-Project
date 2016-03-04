var mongoose = require('mongoose');
var random = require('mongoose-simple-random');
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
artistsSchema.plugin(random);

mongoose.model('artists', artistsSchema);
