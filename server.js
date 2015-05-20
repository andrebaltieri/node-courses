var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var database = require('./config/database');
var bodyParser = require('body-parser');

mongoose.connect(database.url);

app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

require('./app/routes/student.js')(app);
require('./app/routes/course.js')(app);
require('./app/routes/student-course.js')(app);

app.listen(port);
console.log("App listening on port " + port);
