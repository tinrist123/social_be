const { User } = require("../../models");

const getUserInformation = async (req, res) => {
  const { user_id } = req.query;

  try {
    const userInformation = await User.findOne({ _id: user_id })
      .populate("passions")
      .populate("user_info_id");

    if (userInformation) {
      res.status(200).send({
        data: userInformation,
      });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = getUserInformation;
