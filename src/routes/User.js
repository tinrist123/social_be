const express = require("express");
const router = express.Router();
const {
  getRecsUser,
  getUserInformation,
  editGender,
  editPassion,
  editCollege,
  AuthLogin,
  CheckLogin,
  PushNewImage,
  EditAccount,
  EditImages,
  LikeUser,
  getListMatch,
  updateUser,
} = require("../Controllers");

router
  .get("/recs/:_id", getRecsUser)
  .get("/information", getUserInformation)
  .post("/edit/gender", editGender)
  .post("/edit/account", EditAccount)
  .post("/edit/passion", editPassion)
  .post("/edit/college", editCollege)
  .post("/auth", AuthLogin)
  .post("/check/auth", CheckLogin)
  .post("/img", PushNewImage)
  .post("/list/img", EditImages)
  .post("/like", LikeUser)
  .get("/get-list-match/:_id", getListMatch)
  .post("/update", updateUser);
module.exports = router;
