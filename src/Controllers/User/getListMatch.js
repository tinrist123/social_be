const { User } = require("../../models");

const getListMatch = async (req, res) => {
  const userId = req.params._id;

  try {
    const { users_matched } = await User.findOne({ _id: userId });

    const data = await User.find({ _id: { $in: users_matched } });

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

module.exports = getListMatch;
