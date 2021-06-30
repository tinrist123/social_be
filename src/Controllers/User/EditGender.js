const { User, UserInformation } = require("../../models");

const editGender = async (req, res) => {
  const { user_id } = req.query;
  const { gender } = req.body;

  try {
    const user = await User.findOne({ _id: user_id });

    if (user) {
      try {
        const userInfo = await UserInformation.updateOne(
          { _id: user.user_info_id },
          { $set: { gender: gender } }
        );
        res.send({ data: userInfo });
      } catch (error) {
        res.status(404).send({ error: error.message });
      }
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = editGender;
