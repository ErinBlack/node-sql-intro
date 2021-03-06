//require express
var express = require ('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//globals
var port = 9001; // it's over 9000

//users
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//spin up the server
app.listen(port, function(){
  console.log('server is up on port');
});

//base url
app.get('/', function(req, res){
  console.log('in base url');
  res.sendFile(path.resolve('views/index.html'));
});//end base url
