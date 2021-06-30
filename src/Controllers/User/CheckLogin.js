const { User } = require("../../models");

const CheckLogin = async (req, res) => {
  const { access_token } = req.body;

  try {
    const userInformation = await User.findOne({
      token: access_token,
    }).populate("preference_id");

    if (userInformation) {
      return res.status(200).send({
        statusCode: 200,
        status: "authenticated",
        token: userInformation.token,
        user: userInformation,
      });
    }
    // else
    return res
      .status(404)
      .send({ status: "authentication failure", statusCode: 404 });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ status: "query failure", statusCode: 404 });
  }
};

module.exports = CheckLogin;
