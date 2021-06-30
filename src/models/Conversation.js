const mongoose = require("mongoose");

const ConversationSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      require: true,
    },

    participants: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("conversation", ConversationSchema);
