const { Message } = require("../../models");

const getMessages = async (req, res) => {
  const conversationId = req.params.conversation_id;
  try {
    const messages = await Message.find(
      { conversation_id: conversationId },
      { sender_id: 1, message_text: 1, createdAt: 1 },
    );

    res.status(200).json({ data: messages });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

module.exports = getMessages;
