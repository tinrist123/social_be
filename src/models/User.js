const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
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
  }
);

module.exports = mongoose.model("user", UserSchema);
