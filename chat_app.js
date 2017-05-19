var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
<<<<<<< HEAD
var connectedUsers = {};
=======
var teamAUsers = {};
var teamBUsers = {};
>>>>>>> 93330273f9c57e8cf6d24c3694dfd0ec6a7f4d62

app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat_index.html');
});

io.on('connection', function(socket){

	socket.on('user connects', function(user, team){
<<<<<<< HEAD
		io.emit('user connects', '<strong>' + user + 'from team ' + team + ' has connected </strong>');
		connectedUsers[user] = socket;
	});

=======
		io.emit('user connects', '<strong>' + user + ' from Team ' + team + ' has connected </strong>');
	});
>>>>>>> 93330273f9c57e8cf6d24c3694dfd0ec6a7f4d62
	socket.on('user disconnects', function(user){
		io.emit('user disconnects', user);
	});

<<<<<<< HEAD
	socket.on('chat message', function(msg, user){
		io.emit('chat message', msg, user);
=======
	socket.on('chat message', function(msg, user, team, checker){
		io.emit('chat message', msg, user, team, checker);
>>>>>>> 93330273f9c57e8cf6d24c3694dfd0ec6a7f4d62
	});

	socket.on('user is typing', function(user){
		io.emit('user is typing', user);
	});

	socket.on('user stopped typing', function(user){
		io.emit('user stopped typing', user);
	});
});

<<<<<<< HEAD
http.listen(3000, function(){
	console.log('listening on *:3000');
=======
http.listen(8080, function(){
	console.log('listening on *:8080');
>>>>>>> 93330273f9c57e8cf6d24c3694dfd0ec6a7f4d62
});