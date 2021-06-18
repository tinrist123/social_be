const mongoose = require("mongoose");

const PassionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    fake_id: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("passion", PassionSchema);
