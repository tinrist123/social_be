const { User } = require("../../models");

const getRecsUser = async (req, res) => {
  try {
    const recsUser = await User.find({}).limit(10).populate("user_info_id");

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
