const { User } = require("../../models");
const createConversation = require("../Chat/createConversation");
const LikeUser = async (req, res) => {
  const userId = req.body.user_id;
  const targetUserId = req.body.target_id;
  console.log(req.body);
  try {
    const targetUser = await User.findOne(
      {
        _id: targetUserId,
      },
      { users_like: 1 },
    );

    if (targetUser.users_like.includes(userId)) {
      console.log("check matched");
      const particitantId = [];
      particitantId.push(userId);
      particitantId.push(targetUserId);

      createConversation(particitantId);

      await User.updateOne(
        { _id: userId },
        {
          $push: { users_matched: targetUserId },
        },
      );
      await User.updateOne(
        { _id: targetUserId },
        {
          $push: { users_matched: userId },
        },
      );

      return res
        .status(200)
        .json({ success: true, status: "matched", data: targetUserId });
    }
    console.log("push target id");
    await User.updateOne(
      { _id: userId },
      {
        $push: { users_like: targetUserId },
      },
    );

    return res.status(200).json({ success: true, status: "liked" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

module.exports = LikeUser;
