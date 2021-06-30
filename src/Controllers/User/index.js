const getRecsUser = require("./RecommendUser");
const getUserInformation = require("./getUserInformation");
const editGender = require("./EditGender");
const editCollege = require("./EditCollege");
const editPassion = require("./EditPassion");
const AuthLogin = require("./AuthLogin");
const CheckLogin = require("./CheckLogin");
const PushNewImage = require("./PushNewImage");
const EditAccount = require("./EditAccount");
const EditImages = require("./EditImages");
const LikeUser = require("./LikeUser");
const getListMatch = require("./getListMatch");
const updateUser = require("./updateUser");

module.exports = {
  EditImages,
  getRecsUser,
  getUserInformation,
  editGender,
  editPassion,
  editCollege,
  AuthLogin,
  CheckLogin,
  PushNewImage,
  EditAccount,
  LikeUser,
  getListMatch,
  updateUser,
};
