const { User } = require("../../models");

const EditPassion = async (req, res) => {
  const { user_id } = req.query;
  const { passions } = req.body;

  try {
    const userInformation = await User.updateOne(
      { _id: user_id },
      { $set: { passions } }
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

module.exports = EditPassion;
