var cookieParser = require('cookie-parser');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require("./htmlRoutes");

module.exports = {
  use: function(app) {
    app.use(express.static(process.cwd() + "/public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));
    app.use(methodOverride("_method"));
    app.use("/",routes);
    
  }
}