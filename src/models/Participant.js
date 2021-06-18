const mongoose = require("mongoose");

const ParticipantSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    conversation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "conversation",
    },
    time_join: {
      type: Date,
      require: true,
    },
    time_left: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("participant", ParticipantSchema);
