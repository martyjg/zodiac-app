var User = require("../models/user");

function usersIndex(req, res) {
  User.find({}, function(err, users) {
    if (err) return res.render("error", { message: "Something went wrong.. " + err });
    res.render("users/index", { users : users })
  } )
}

module.exports = {
  usersIndex: usersIndex
}