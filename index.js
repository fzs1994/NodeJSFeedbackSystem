// General Requirements
var express = require ('express');
var app = express();

var port         = process.env.PORT || 8080;
var bodyParser   = require('body-parser');

app.use(bodyParser()); // get information from html forms

// routes ======================================================================
require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

//setting template engine
app.set('view engine','ejs');

//setting assets/static files
app.use(express.static('./public'));

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

// Setting Home page view
app.get('/', function(req, res) {
  res.render('index');
})

app.use(function (req, res) {
    res.render('error');
});