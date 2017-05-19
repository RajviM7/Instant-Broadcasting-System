var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var nickname = "";
var roomno = 1;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  io.emit('chat message', 'A user has connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    io.emit('chat message', 'A user has disconnected');
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});