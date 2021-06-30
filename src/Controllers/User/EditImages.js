const { User } = require("../../models");

const EditImages = async (req, res) => {
  const { user_id } = req.query;
  const { images } = req.body;

  try {
    const userUpdated = await User.updateOne(
      { _id: user_id },
      { $set: { images: images } }
    );

    if (userUpdated) {
      res.status(200).send({
        data: userUpdated,
        status: "success",
        statusCode: 200,
      });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = EditImages;
