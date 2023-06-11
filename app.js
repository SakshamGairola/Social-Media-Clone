const express = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')
const userRouter = require('./router/userRouter')
const database = require('./db/mongooseDB')
require('dotenv').config()

const PORT = process.env.PORT || 3000


const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    return res.sendFile('/public/index.html')
})

app.use('/user', userRouter)

io.on('connection', (socket) => {
    console.log('a user connected' + socket.id)
    // socket.emit('message', 'msg event fired')
    socket.on('message', (data) => {
        console.log('Received message:', data);
        socket.broadcast.emit('message', data); // Emit the received message to all connected clients
      });
})

// io.on('message', message => {
//     console.log(message)
// })


server.listen(9000, () => {
    console.log(`Server started on port ${PORT}`)
})