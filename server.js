var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static('./public'));
 
require("./controllers/burger_controller.js")(app);

app.set('port', process.env.PORT);

app.listen(app.get('port'), () => {
    console.log("app listening on ${app.get('port')}");
});