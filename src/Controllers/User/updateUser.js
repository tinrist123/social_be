const { User, UserInformation } = require("../../models");
const mongoose = require("mongoose");

const createUserInfo = async (gender) => {
  const information = new UserInformation({
    description: "",
    hobbies: "",
    job_title: "",
    company_name: "",
    gender: gender,
    city_name: "",
  });

  try {
    const informationSaved = await information.save();

    if (informationSaved) {
      return informationSaved._id;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { user_id } = req.query;
  const { dob, email, passions, gender, name, pics } = req.body;

  try {
    const userUpdated = await User.findOneAndUpdate(
      { _id: user_id },
      {
        $set: {
          dob: dob,
          email: email,
          passions: passions,
          name: name,
          images: pics,
          user_info_id: await createUserInfo(gender),
        },
      },
    ).populate("user_info_id");

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

module.exports = updateUser;
