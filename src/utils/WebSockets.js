const { saveMessage } = require("../Controllers");
const { Message } = require("../models");

class WebSockets {
  users = [];
  connection(client) {
    console.log("connected with:", client.id);
    // client.on("disconnect", () => {
    //   // this.users = this.users.filter((user) => user.socketId !== client.id);
    // });
    client.on("identity", (userId) => {
      this.users.push({
        socketId: client.id,
        userId: userId,
      });
    });

    client.on("send message", async (conversationId, messageText, senderId) => {
      console.log(`socketID: ${client.id}`);
      console.log(`room: ${conversationId}`);
      try {
        const message = await new Message({
          sender_id: senderId,
          conversation_id: conversationId,
          message_text: messageText,
        });

        message.save().then((data) => {
          const message = {
            sender_id: data.sender_id,
            message_text: data.message_text,
            createdAt: data.createdAt,
          };
          console.log("messagessss: ", message);

          io.to(conversationId).emit("receive message", message);
        });
      } catch (error) {
        console.log(error);
      }
    });

    client.on("subscribe", (room) => {
      // this.subscribeOtherUser(room, otherUserId);
      client.join(room);
      console.log(client.id, " joined room ", room);
    });
    client.on("unsubscribe", (room) => {
      client.leave(room);
    });
  }

  // subscribeOtherUser(room: string, otherUserId: string) {
  //   const userSockets = this.users.filter(
  //     (user) => user.userId === otherUserId,
  //   );
  //   userSockets.map((userInfo) => {
  //     const socketConn = global.io.sockets.connected(userInfo.socketId);
  //     if (socketConn) {
  //       socketConn.join(room);
  //     }
  //   });
  // }
}

module.exports = new WebSockets();
