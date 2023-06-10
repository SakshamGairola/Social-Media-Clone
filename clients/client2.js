// client.js
const io = require('socket.io-client');
const readline = require('readline');

const socket = io('http://localhost:9000');

socket.on('connect', () => {
  console.log('Connected to the server!');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter your username: ', (username) => {
    socket.emit('message', `User "${username}" has joined the chat.`);
    startChat(rl, username);
  });
});

socket.on('message', (data) => {
  console.log(data);
});

function startChat(rl, username) {
  rl.question('', (message) => {
    if (message.toLowerCase() === 'exit') {
      socket.emit('message', `User "${username}" has left the chat.`);
      rl.close();
      return;
    }

    socket.emit('message', `[${username}]: ${message}`);
    startChat(rl, username);
  });
}
