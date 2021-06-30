const mongoose = require("mongoose");
require("dotenv/config");

const migratePassion = require("./Passion");
const migrateCollege = require("./College");
const migrateUser = require("./User");

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  () => {
    console.log("connect to DB");
  }
);

migratePassion();
migrateCollege();
migrateUser();
