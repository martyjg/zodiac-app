var express        = require("express");
var morgan         = require("morgan");
var bodyParser     = require('body-parser');
var path           = require('path');
var expressLayouts = require('express-ejs-layouts');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');

var app            = express();

var routes = equire("./config/routes");

var databaseUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/zodiac-app';



app.listen(3000);
console.log("Express is listening on 3000.....")