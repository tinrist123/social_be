const { Conversation, User } = require("../../models");

const createConversation = async (participantId) => {
  try {
    console.log("list parti: ", participantId);
    const _id = `${participantId[0]}${participantId[1]}`;
    const conversation = new Conversation({
      _id: _id,
      participants: participantId,
    });
    await conversation.save();

    const result1 = await User.updateOne(
      { _id: participantId[0] },
      { $push: { list_conversation: _id } },
    );
    const result2 = await User.updateOne(
      { _id: participantId[1] },
      { $push: { list_conversation: _id } },
    );
    if (result1 + result2 === 2) return true;
    else return false;
  } catch (error) {
    console.log("err: ", error);
    return false;
  }
};

module.exports = createConversation;
