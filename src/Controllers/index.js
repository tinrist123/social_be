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
  LikeUser,
  getListMatch,
  updateUser,
} = require("./User");
const { getAllPassions } = require("./Passion");
const { getCollegeByQuery } = require("./College");
const {
  createConversation,
  saveMessage,
  getListConversation,
  getMessages,
} = require("./Chat");
module.exports = {
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
  LikeUser,
  getListMatch,
  createConversation,
  saveMessage,
  getListConversation,
  updateUser,
  getMessages,
};
