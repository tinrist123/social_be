const { Message } = require("../../models");

const saveMessage = async (senderId, conversationId, messageText) => {
  try {
    const message = await new Message({
      sender_id: senderId,
      conversation_id: conversationId,
      message_text: messageText,
    });

    message.save().then((data) => {
      console.log("dataaaaa: ", data);
      const message = {
        sender_id: data.sender_id,
        message_text: data.message_text,
        createdAt: data.createdAt,
      };
      console.log("messagessss: ", message);

      return message;
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = saveMessage;
