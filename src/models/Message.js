const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    sender_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    conversation_id: {
      type: String,
      ref: "conversation",
    },

    message_text: {
      type: String,
      require: true,
    },
    message_type: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("message", MessageSchema);
