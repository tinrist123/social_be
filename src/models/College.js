const mongoose = require("mongoose");

const CollegeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    index: true,
  },
  description: {
    type: String,
  },
});


CollegeSchema.index({ name: "text" });


module.exports = mongoose.model("college", CollegeSchema);
