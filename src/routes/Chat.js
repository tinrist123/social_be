const express = require("express");
const router = express.Router();
const {
  createConversation,
  getListConversation,
  getMessages,
} = require("../Controllers");

router.post("/", createConversation);
router.get("/:user_id", getListConversation);
router.get("/messages/:conversation_id", getMessages);

module.exports = router;
