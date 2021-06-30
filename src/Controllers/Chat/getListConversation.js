const { Conversation, User, Message } = require("../../models");

const getListConversation = async (req, res) => {
  const userId = req.params.user_id;
  try {
    const listConversation = await Conversation.find({
      participants: { $in: [userId] },
    });

    const another = listConversation[0].participants.filter(
      (id) => id !== userId,
    );
    const lastMessage = await Message.find({
      conversation_id: listConversation[0]._id,
    });

    let message;
    if (lastMessage[0])
      message = lastMessage[lastMessage.length - 1].message_text;
    else message = "";

    const userInfo = await User.findOne({ _id: another[0] });
    let image =
      "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png";

    if (userInfo.images[0] !== "") image = userInfo.images[0];

    res.json([
      {
        name: userInfo.name,
        _id: userInfo._id,
        imgSrc: image,
        lastMessage: message,
        conversationId: listConversation[0]._id,
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getListConversation;
