var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contributors = new Schema({
fc: String,
id: Number
});

var artworksSchema = new Schema({
thumbnailUrl: String,
acno: String,
title: String,
contributors: [contributors]
});

mongoose.model('artworks', artworksSchema);
