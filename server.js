// dependencies
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./app/routes/apiRoutes.js')(app); 
require('./app/routes/htmlRoutes.js')(app);

// start server
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});