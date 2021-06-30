const mongoose = require("mongoose");

const WardSchema = new mongoose.Schema({
  wardName: {
    type: String,
    require: true,
  },
  warNameEn: {
    type: String,
  },
  level: {
    type: String,
    require: true,
  },
  district_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "districts",
  },
  province_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "provinces",
  },
});

module.exports = mongoose.model("ward", WardSchema);
