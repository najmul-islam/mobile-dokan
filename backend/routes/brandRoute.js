const express = require("express");
const router = express.Router();

const {
  getAllBrand,
  getSingleBrand,
  createBrnad,
  updateBrnad,
  deleteBrand,
} = require("../controllers/brandController");

const logoImg = require("../middlewares/logoImgMiddleware");

router.route("/").get(getAllBrand).post(logoImg, createBrnad);
router.route("/:id").get(getSingleBrand).put(updateBrnad).delete(deleteBrand);

module.exports = router;
