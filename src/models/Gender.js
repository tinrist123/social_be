const mongoose = require("mongoose");

const GenderSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("gender", GenderSchema);
