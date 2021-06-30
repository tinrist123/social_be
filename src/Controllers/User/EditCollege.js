const { User } = require("../../models");

const EditCollege = async (req, res) => {
  const { user_id } = req.query;
  const { college } = req.body;

  try {
    const userInformation = await User.updateOne(
      { _id: user_id },
      { $set: { school: college } }
    );

    if (userInformation) {
      res.status(200).send({
        data: userInformation,
      });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = EditCollege;
