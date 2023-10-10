const { Server } = require("socket.io");
const ChatModel = require('./components/Chat/ChatModel')
const io = new Server({ /* options */ });
let message =[];

const port = 3001;
io.on("connection", socket => {

  socket.on("sendMessage", (newMessage) => {
    console.log("newMessage sendMessage ", newMessage);
    io.to(socket.roomName).emit("onMessage", newMessage)
  })

  // const message = new ChatModel(newMessage)
  // await message.save()
  // db.collection('Chat').insertOne(newMessage, (err, result) => {
  //   if (err) {
  //     console.error('Lỗi khi lưu thông tin chat:', err);
  //     return;
  //   }
  //   console.log('Đã lưu thông tin chat thành công');
  // });
  socket.on("join-room", (roomName) => {
    socket.roomName = roomName
    socket.join(roomName)
  })
  console.log("A user connected :))))");
})


io.listen(port, () => console.log("server running on port" + port));
