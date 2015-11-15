var mongoose = require("mongoose");

var userSchema = mongoose.Schema( {
  name: String,
  age: Number,
  dob: Date,
  sign: String
})

module.exports = mongoose.model("User", userSchema);