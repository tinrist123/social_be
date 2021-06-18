const { Passion } = require("../../models");

const getAllPassion = async (req, res) => {
  try {
    const allPassions = await Passion.find({});

    if (allPassions) {
      res.status(200).send({
        total: allPassions.length,
        data: allPassions,
      });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = getAllPassion;
