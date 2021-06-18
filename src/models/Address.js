const mongoose = require("mongoose");
const AddressSchema = new mongoose.Schema({
  streetName: {
    type: String,
    require: true,
  },
  province_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "provinces",
  },
  district_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "districts",
  },
  ward_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "wards",
  },
});

module.exports = mongoose.model("address", AddressSchema);
