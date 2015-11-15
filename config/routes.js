var express = require("express");
var router  = express.Router();

var usersController = require("../controllers/usersController");

router.route("/users")
  .get(usersController.usersIndex)
  .post(usersController.usersCreate)

router.route("/users/new")
  .get(usersController.usersNew)

router.route("/users/:id")
  .get(usersController.usersShow)

module.exports = router;