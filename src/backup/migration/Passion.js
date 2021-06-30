const { Passion } = require("../../models");
const passions = require("../data/passion.json");

const migratePassion = async () => {
  let length = 0;
  const { data } = passions;

  const createPassion = async (passion) => {
    const PassionModel = new Passion({
      name: passion.name,
      fake_id: passion.id,
    });
    try {
      const savedPassion = await PassionModel.save();
      if (savedPassion) {
        length += 1;
      }
      if (length === data.length) console.log("completed Passion");
    } catch (error) {
      console.log(error);
    }
  };

  await Promise.all(data.map((passion) => createPassion(passion)));
};

module.exports = migratePassion;
