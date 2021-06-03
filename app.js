const express = require('express')
const app = express()
const port = 9000

var path = require("path")
const pug = require('pug')

app.set('view engine', 'pug');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

//Tạo socket 
io.on('connection', function (socket) {
    console.log('Welcome to server chat');

    socket.on('send', function (data) {
        io.sockets.emit('send', data);
    });
});

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    res.render('chat')
})

//Khởi tạo 1 server listen tại 1 port
server.listen(9000);