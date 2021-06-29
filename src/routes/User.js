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
  updateUser,
} = require("../Controllers");

router.get("/recs", getRecsUser);
router.get("/information", getUserInformation);
router.post("/edit/gender", editGender);
router.post("/edit/account", EditAccount);
router.post("/edit/passion", editPassion);
router.post("/edit/college", editCollege);
router.post("/auth", AuthLogin);
router.post("/check/auth", CheckLogin);
router.post("/img", PushNewImage);
router.post("/list/img", EditImages);
router.post("/update", updateUser);

module.exports = router;
