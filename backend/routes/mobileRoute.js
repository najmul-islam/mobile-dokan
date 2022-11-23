const express = require("express");
const router = express.Router();

const {
  getAllMobile,
  getSingleMobile,
  createMobile,
  updateMobile,
  deleteMobile,
} = require("../controllers/mobileController");

const mobileImg = require("../middlewares/mobileImgMiddleware");

router.route("/").get(getAllMobile).post(mobileImg, createMobile);
router
  .route("/:id")
  .get(getSingleMobile)
  .put(updateMobile)
  .delete(deleteMobile);

module.exports = router;
