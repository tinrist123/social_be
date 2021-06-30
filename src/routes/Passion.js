const express = require("express");
const router = express.Router();
const { getAllPassions } = require("../Controllers");

router.get("/all", getAllPassions);

module.exports = router;
