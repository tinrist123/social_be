const mongoose = require("mongoose");

const UserInfoSchema = mongoose.Schema({
  description: {
    type: String,
  },
  hobbies: {
    type: String,
  },
  job_title: {
    type: String,
  },
  company_name: {
    type: String,
  },
  gender: {
    type: Number,
  },
  city_name: {
    type: String,
  },
  address_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "address",
  },
});

module.exports = mongoose.model("user_information", UserInfoSchema);
