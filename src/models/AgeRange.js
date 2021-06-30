const mongoose = require("mongoose");

const AgeRangeSchema = mongoose.Schema({
  max: {
    type: Number,
    require: true,
  },
  min: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("age_range", AgeRangeSchema);
