// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

require('./app/routes/apiRoutes.js')(app); 
require('./app/routes/htmlRoutes.js')(app);

// start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});