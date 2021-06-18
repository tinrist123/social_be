const { User, UserInformation } = require("../../models");

const EditAccount = async (req, res) => {
  const { user_id } = req.query;
  const { job_title, company_name, description } = req.body;

  try {
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    let update = { expire: new Date() };

    let userInfo = await UserInformation.findOneAndUpdate(
      {
        job_title: job_title,
        company_name,
        description,
      },
      update,
      options
    );

    if (userInfo) {
      try {
        const userInformation = await User.updateOne(
          { _id: user_id },
          { $set: { user_info_id: userInfo._id } }
        );

        if (userInformation) {
          res.status(200).send({
            data: userInformation,
            status: "success",
            statusCode: 200,
          });
        }
      } catch (error) {
        res.status(404).send({ error: error.message });
      }
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = EditAccount;
