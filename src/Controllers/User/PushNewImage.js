const { User } = require("../../models");

const PushNewImage = async (req, res) => {
  const { user_id, img_url } = req.query;

  try {
    const userInformation = await User.updateOne(
      { _id: user_id },
      { $addToSet: { images: img_url } }
    );

    if (userInformation) {
      res.status(200).send({
        statusCode: 200,
        status: "success",
        data: userInformation,
      });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = PushNewImage;
