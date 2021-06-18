const mongoose = require("mongoose");

const MatchPreferencesSchema = mongoose.Schema({
  distance: {
    type: Number,
    require: true,
    default: 10,
  },
  age_min: {
    type: Number,
    require: true,
    default: 18,
  },
  age_max: {
    type: Number,
    require: true,
    default: 24,
  },
});

module.exports = mongoose.model("match_preference", MatchPreferencesSchema);
