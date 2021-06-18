const { User, MatchPreference } = require("../../models");

/// CREATE IF NOT EXISTS OR UPDATE IF EXISTS
const createMathPreference = async (user_id) => {
  const preference = new MatchPreference();
  let preferenceSaved = await preference.save();

  if (preferenceSaved) {
    console.log(preferenceSaved);
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    let update = { preference_id: preferenceSaved._id };
    return await User.findOneAndUpdate(
      { _id: user_id },
      update,
      options
    ).populate("preference_id");
  }
};

const AuthLogin = async (req, res) => {
  const { accessToken, email, typeAuth, name } = req.body;

  try {
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    let update = { expire: new Date() };
    let user = await User.findOneAndUpdate(
      {
        token: accessToken,
        email,
        type_login: typeAuth,
        name: name,
      },
      update,
      options
    ).populate("preference_id");

    if (user) {
      if (!user.preference_id) {
        let updatedUser = await createMathPreference(user._id);
        console.log(updatedUser);
        return res.status(200).send({
          status: "success",
          token: updatedUser.token,
          user: updatedUser,
        });
      } else {
        return res.status(200).send({
          status: "success",
          token: user.token,
          user: user,
        });
      }
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = AuthLogin;
