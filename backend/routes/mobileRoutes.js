const express = require("express");
const router = express.Router();

const {
  getAllMobile,
  getSingleMobile,
  createMobile,
  updateMobile,
  deleteMobile,
} = require("../controllers/mobileController");

router.route("/").get(getAllMobile).post(createMobile);
router
  .route("/:id")
  .get(getSingleMobile)
  .put(updateMobile)
  .delete(deleteMobile);

module.exports = router;
