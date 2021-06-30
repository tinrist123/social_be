const { College } = require("../../models");

const getCollegeByQuery = async (req, res) => {
  const { text_search } = req.query;

  try {
    const resultCollege = await College.find({
      $text: { $search: text_search },
    }).limit(10);

    if (resultCollege) {
      res.status(200).send({
        total: resultCollege.length,
        data: resultCollege,
      });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = getCollegeByQuery;
