const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

//Import Routes
const { userRoute, passionRoute, collegeRoute } = require("./src/routes");

app.use(express.json());

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin,Accept, X-Requested-With, Content-Type,ContentType Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//HOMEPAGE
app.use("/user", userRoute);
app.use("/passion", passionRoute);
app.use("/college", collegeRoute);

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  () => {
    console.log("connect to DB");
  }
);

app.listen(3333);
