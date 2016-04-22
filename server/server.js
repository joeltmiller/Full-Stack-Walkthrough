var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Routers
var index = require('./routes/index');
var sandwich = require('./routes/sandwich');
var song = require('./routes/song');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/', index);
app.use('/sandwich', sandwich);
app.use('/song', song);

mongoose.connect('mongodb://127.0.0.1/princeSongz');

var server = app.listen(port, function(){
  var livePort = server.address().port;
  console.log('Listening on port', livePort, 'Press ctrl-c to end');
})
