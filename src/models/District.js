const mongoose = require("mongoose");

const DistrictSchema = new mongoose.Schema({
  districtName: {
    type: String,
    require: true,
  },
  districtNameEn: {
    type: String,
  },
  districtLevel: {
    type: String,
    require: true,
  },
  fakeId: {
    type: Number,
    require: true,
  },
  province_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "provinces",
  },
});

module.exports = mongoose.model("district", DistrictSchema);
