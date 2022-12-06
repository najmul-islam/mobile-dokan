const express = require("express");
const router = express.Router();

const {
  getAllBrand,
  getSingleBrand,
  getBrandMobiles,
  createBrnad,
  updateBrnad,
  deleteBrand,
} = require("../controllers/brandController");

const brandsImg = require("../middlewares/brandImgMiddleware");

router.route("/").get(getAllBrand).post(brandsImg, createBrnad);
router
  .route("/:brandslug")
  .get(getSingleBrand)
  .put(updateBrnad)
  .delete(deleteBrand);
// router.route("/:brandslug/:brandmobiles").get(getBrandMobiles);

module.exports = router;
