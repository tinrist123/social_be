const { College } = require("../../models");
const colleges = require("../data/College.json");

const migrateCollege = async () => {
  let length = 0;
  const { data } = colleges;

  const createCollege = async (college) => {
    const collegeModel = new College({
      name: college.name,
      fake_id: college.id,
    });
    try {
      const savedCollege = await collegeModel.save();
      if (savedCollege) {
        length += 1;
      }
      if (length === data.length) console.log("completed College");
    } catch (error) {
      console.log(error);
    }
  };

  await Promise.all(data.map((college) => createCollege(college)));
};

module.exports = migrateCollege;
