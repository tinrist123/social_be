const {
  getRecsUser,
  getUserInformation,
  editCollege,
  editGender,
  editPassion,
  AuthLogin,
  CheckLogin,
  PushNewImage,
  EditAccount,
  EditImages,
  updateUser,
} = require("./User");
const { getAllPassions } = require("./Passion");
const { getCollegeByQuery } = require("./College");

module.exports = {
  updateUser,
  PushNewImage,
  getRecsUser,
  getAllPassions,
  getCollegeByQuery,
  getUserInformation,
  editCollege,
  editGender,
  editPassion,
  AuthLogin,
  CheckLogin,
  EditAccount,
  EditImages,
};
