var mongoose = require("mongoose");


var crystalSchema = new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
});

var Crystal = mongoose.model('Crystal', crystalSchema);

module.exports = Crystal;