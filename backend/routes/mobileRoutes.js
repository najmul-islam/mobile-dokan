const express = require("express");
const router = express.Router();

const {
  getAllMobile,
  createMobile,
} = require("../controllers/mobileController");

router.route("/").get(getAllMobile).post(createMobile);

module.exports = router;
