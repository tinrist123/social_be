const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      default: "",
    },
    email: {
      type: String,
      require: true,
    },
    type_login: {
      type: String,
    },
    password: {
      type: String,
    },
    dob: {
      type: Date,
    },
    school: {
      type: String,
      require: true,
    },
    distance: {
      type: Number,
    },
    token: {
      type: String,
      require: true,
    },
    cell_phone: {
      type: String,
    },
    matched_count: {
      type: Number,
    },
    user_info_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user_information",
    },
    preference_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "match_preference",
    },
    images: [
      {
        type: String,
        default:
          "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png",
      },
    ],
    users_dislike: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    users_like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    users_matched: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    list_conversation: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "conversation",
      },
    ],
    passions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "passion",
      },
    ],
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("user", UserSchema);
