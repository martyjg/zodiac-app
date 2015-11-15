var mongoose = require("mongoose");

var databaseUrl = "mongodb://localhost:27017/zodiac-app"
mongoose.connect(databaseUrl);

var User = require("../models/user");

function saveToDb(err, user) {
  if (err) console.log(err);
  console.log("User saved: " + user)
}

var users = [
  {
    name: "Marty",
    age: 23,
    dob: "08-16-1992",
    sign: "Leo"
  },
  {
    name: "Sonny",
    age: 22,
    dob: "01-25-1993",
    sign: "Capricorn"
  }
]

users.forEach(function(user, index) {
  var newUser = new User(user);
  newUser.save(saveToDb);
});

