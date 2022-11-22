const express = require("express");
const router = express.Router();

const {
  getAllMobile,
  getSingleMobile,
  createMobile,
  updateMobile,
  deleteMobile,
} = require("../controllers/mobileController");

const imageUplaod = require("../middlewares/imageUploadMiddleware");

router.route("/").get(getAllMobile).post(imageUplaod, createMobile);
router
  .route("/:id")
  .get(getSingleMobile)
  .put(updateMobile)
  .delete(deleteMobile);

module.exports = router;
