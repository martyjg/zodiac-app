var User = require("../models/user");

function usersIndex(req, res) {
  User.find({}, function(err, users) {
    if (err) return res.render("error", { message: "Something went wrong.. " + err });
    res.render("users/index", { users : users })
  } )
}

function usersShow(req, res) {
  var id = req.params.id;
  User.findById({ _id: id }, function(err, user) {
    if (err) return res.render("error", { message: "Something went wrong.. " + err });
    res.render("users/show", { user : user })
  } )
}

function usersNew(req, res) {
  res.render("users/new");
}

function usersEdit(req, res) {
  var id = req.params.id;

  User.findById({ _id: id }, function(err, user) {
    if (err) return res.render("error", { message: "Something went wrong.. " + err});
    res.render("users/edit", { user: user })
  } )
}

function usersCreate(req, res) {
  var userParams = req.body.user;
  var user = new User(userParams);

  user.save(function(err) {
    if (err) return res.render("error", { message: "Something went wrong.. " + err });
    res.redirect("/users");
  })
}

function usersUpdate(req, res) {
  var id = req.params.id;
  var userParams = req.body.user;

  User.findByIdAndUpdate({ _id: id }, userParams, function(err, user) {
    if (err) return res.render("error", { message: "Something went wrong.. " + err});
    res.redirect("/users");
  })
}

function usersDelete(req, res) {
  var id = req.params.id;
  User.remove({ _id: id }, function(err) {
    if (err) return res.render("error", { message: "Something went wrong.. " + err});
    res.redirect("/users");
  } )
}

module.exports = {
  usersIndex: usersIndex,
  usersShow: usersShow,
  usersNew: usersNew,
  usersCreate: usersCreate,
  usersEdit: usersEdit,
  usersUpdate: usersUpdate,
  usersDelete: usersDelete
}