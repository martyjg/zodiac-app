var mongoose = require("mongoose");

var databaseUrl = "mongodb://localhost:27017/zodiac-app"
mongoose.connect(databaseUrl);

var User = require("../models/user");
var Crystal = require("../models/crystal")

function saveToDb(err, user) {
  if (err) console.log(err);
  console.log("User saved: " + user)
}

// var users = [
//   {
//     name: "Marty",
//     age: 23,
//     dob: "08-16-1992",
//     sign: "Leo"
//   },
//   {
//     name: "Sonny",
//     age: 22,
//     dob: "01-25-1993",
//     sign: "Capricorn"
//   }
// ]

// users.forEach(function(user, index) {
//   var newUser = new User(user);
//   newUser.save(saveToDb);
// });

var user1 = new User( {
  name: "Marty",
  age: 23,
  dob: "08-16-1992",
  sign: "Leo"
})

user1.save(function(err) {
  if (err) console.log(err);
  console.log("USER 1 SAVED")
})

var user2 = new User( {
  name: "Sonny",
  age: 22,
  dob: "01-05-1993",
  sign: "Capricorn"
})

user2.save(function(err) {
  if (err) console.log(err);
  console.log("USER 2 SAVED")
})

var crystal1 = new Crystal( {
  name: "Tiger's Eye",
  owner: user1
})

crystal1.save(function(err) {
  if (err) console.log(err);
  console.log("CRYSTAL 1 SAVED")
})

var crystal2 = new Crystal( {
  name: "Aquamarine",
  owner: user2
})

crystal2.save(function(err) {
  if (err) console.log(err);
  console.log("CRYSTAL 2 SAVED")
})

var crystal3 = new Crystal( {
  name: "Garnet",
  owner: user1
})

crystal3.save(function(err) {
  if (err) console.log(err);
  console.log("CRYSTAL 3 SAVED")
})

var crystal4 = new Crystal( {
  name: "Citrine",
  owner: user2
})

crystal4.save(function(err) {
  if (err) console.log(err);
  console.log("CRYSTAL 4 SAVED")
})



