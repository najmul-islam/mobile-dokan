const express = require("express");
const router = express.Router();

const {
  getAllBrand,
  getSingleBrand,
  createBrnad,
  updateBrnad,
  deleteBrand,
} = require("../controllers/brandController");

const brandsImg = require("../middlewares/brandImgMiddleware");

router.route("/").get(getAllBrand).post(brandsImg, createBrnad);
router.route("/:id").get(getSingleBrand).put(updateBrnad).delete(deleteBrand);

module.exports = router;
