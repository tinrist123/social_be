const { User } = require("../../models");

const getRecsUser = async (req, res) => {

  const _id = req.params._id;

  try {
    const recsUser = await User.find({ _id: { $ne: _id } })
      .limit(10)
      .populate("user_info_id");


    if (recsUser) {
      res.status(200).send({
        total: recsUser.length,
        data: recsUser,
      });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = getRecsUser;
