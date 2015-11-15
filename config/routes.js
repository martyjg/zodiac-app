var express = require("express");
var router  = express.Router();

var usersController = require("../controllers/usersController");

router.route("/users")
  .get(usersController.usersIndex)

module.exports = router;