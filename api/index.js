var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user is connected');

  socket.on('test', (obj) => {
    console.log(obj)
  });
});


var server = http.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});
