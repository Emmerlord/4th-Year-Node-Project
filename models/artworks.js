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
medium: String,
units: String,
width: Number,
height: Number, 
contributors: [contributors]
});

mongoose.model('artworks', artworksSchema);
