// node server which will handle socket io connections
const io=require('socket.io')(8000)

const users ={};

io.on('connection', socket=>{
    socket.on('user-joined',name)
    user[socket.id]=name;
    socket.broadcast.emit('user-joined',name)
})

socket.on('send',message =>{
    socket.broadcast.emit
})