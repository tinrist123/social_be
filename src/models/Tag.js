const mongoose = require("mongoose");

const TagSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("tag", TagSchema);
