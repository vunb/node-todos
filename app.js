var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
 
var config = require('./config');
var setupController = require('./api/controllers/setupController');
var todoController = require('./api/controllers/todoController');


var app = express();
var port = process.env.PORT || 3001;

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// log every request to the console
app.use(morgan('dev')); 

app.set('view engine', 'ejs');

console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString());

setupController(app);
todoController(app);


// setup views
app.get("/", function (req, res) {
    // load the single view file (angular will handle the page changes on the front-end)
    res.render("index");
});

app.listen(port, function () {
    console.log("App listening on port " + port);
});