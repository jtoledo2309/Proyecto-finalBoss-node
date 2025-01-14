const express = require('express');
const app = express();
const http = require('http').Server(app);
const PORT = process.env.SOCKET_PORT;

const socketIO = require('socket.io')(http, {
    cors: {
        origin: process.env.ORIGIN_URL
    }
});

let users = [];

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

	//sends the message to all the users on the server
	socket.on('message', (data) => {
		console.log(data);
		socketIO.emit('messageResponse', data);
	  });
	
	socket.on('typing', (data) => socket.broadcast.emit('typingResponse', data));

	//Listens when a new user joins the server
  	socket.on('newUser', (data) => {
    //Adds the new user to the list of users
    users.push(data);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
  });
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
	  //Updates the list of users when a user disconnects from the server
	  users = users.filter((user) => user.socketID !== socket.id);
	  // console.log(users);
	  //Sends the list of users to the client
	  socketIO.emit('newUserResponse', users);
	  socket.disconnect();
    });
});

http.listen(PORT, () => {
	console.log(`Socket listening on ${PORT}`);
  });