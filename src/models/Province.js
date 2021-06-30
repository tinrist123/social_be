const mongoose = require("mongoose");

const ProvinceSchema = new mongoose.Schema({
  provinceName: {
    type: String,
    require: true,
  },
  level: {
    type: String,
    require: true,
  },
  fakeId: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("province", ProvinceSchema);
