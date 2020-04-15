const { getRandomColor } = require('./utils/getRandomColor')
const { getRandomAvatar } = require('./utils/getRandomAvatar')

let path = require('path')
let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
const PORT = process.env.PORT || 5001;

app.use(express.static('build'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

let users = {}

io.on('connection', (socket) => {

  io.emit('users', users)

  socket.on('disconnect', () => {
    io.sockets.emit('user disconnected', users[socket.id])
    delete users[socket.id]
  })

  socket.on('new user', (username) => {
    let newUser = {
      socketId: socket.id,
      username: username,
      color: getRandomColor(),
      avatar: getRandomAvatar()
    }
    users[socket.id] = newUser
    io.sockets.emit('user joined', newUser)
  })

  socket.on('add message', (message) => {
    io.sockets.emit('new message', {
      username: users[socket.id].username,
      message: message,
      color: users[socket.id].color
    })
  })

});

http.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})