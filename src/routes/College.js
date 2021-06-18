const express = require("express");
const router = express.Router();
const { getCollegeByQuery } = require("../Controllers");

router.get("/search", getCollegeByQuery);

module.exports = router;
