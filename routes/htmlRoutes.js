var express = require("express");
var router = express.Router();
var app = require("../server.js")
app.get("/",function(req,res){
	res.render("homepage");
})

module.exports = router;