const express = require("express");
const router = express.Router();

const {
  getAllMobile,
  getSingleMobile,
  createMobile,
  updateMobile,
  deleteMobile,
  getSingleMobileById,
} = require("../controllers/mobileController");

const mobileImg = require("../middlewares/mobileImgMiddleware");

router.route("/").get(getAllMobile).post(mobileImg, createMobile);
router
  .route("/:mobileslug")
  .get(getSingleMobile)
  .put(updateMobile)
  .delete(deleteMobile);
// router.route("/:id", getSingleMobileById);
module.exports = router;
