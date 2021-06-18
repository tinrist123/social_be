const mongoose = require("mongoose");

const ConversationSchema = mongoose.Schema(
  {
    channel_name: {
      type: String,
      require: true,
    },
    is_private: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("conversation", ConversationSchema);
