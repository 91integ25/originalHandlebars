var express = require('express'),
	app = express(),
	db = require("./models"),
	exphbs = require("express-handlebars"),
	// apiRoutes = require("./routes/apiRoutes"),
	middleware = require("./routes/middleware")
	routes = require("./routes/htmlRoutes"),
	PORT = process.env.PORT || 8080;

middleware.use(app);
app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars")

db.sequelize.sync({force:true}).then(function(){
	app.listen(PORT,function(){
		console.log("listening on PORT: " + PORT)
	});
});

module.exports = app;