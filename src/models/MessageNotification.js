const mongoose = require("mongoose");

const MessageNotiSchema = mongoose.Schema(
  {
    message_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
    conversation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "conversation",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    is_seen: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("message_notification", MessageNotiSchema);
