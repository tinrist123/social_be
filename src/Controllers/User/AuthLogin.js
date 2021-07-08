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

const saveTokenToUser = async (user_id, token) => {
  try {
    const user = await User.updateOne(
      { _id: user_id },

      { $set: { token: token } }
    );
    console.log(user_id);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

const AuthLogin = async (req, res) => {
  const { accessToken, email, typeAuth, name } = req.body;

  try {
    let options = {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    };
    let update = { expire: new Date() };
    let user = await User.findOneAndUpdate(
      {
        email,
        type_login: typeAuth,
        name: name,
      },
      update,
      options
    ).populate("preference_id");

    if (user) {
      await saveTokenToUser(user._id, accessToken);
      if (!user.preference_id) {
        let updatedUser = await createMathPreference(user._id);
        return res.status(200).send({
          status: "success",
          token: accessToken,
          user: updatedUser,
        });
      } else {
        return res.status(200).send({
          status: "success",
          token: accessToken,
          user: user,
        });
      }
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = AuthLogin;
