const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");
const Brand = require("../models/brandModel");
const Mobile = require("../models/mobileModel");

// get all brands
const getAllBrand = asyncHandler(async (req, res) => {
  const brands = await Brand.find({}).sort("rank");
  res.status(200).json({ nbHits: brands.length, brands });
});

// get single brand
const getSingleBrand = asyncHandler(async (req, res) => {
  const { brandslug } = req.params;

  const brand = await Brand.findOne({ slug: brandslug });

  if (!brand) {
    res.status(400);
    throw new Error(`No brand with id ${brandslug}`);
  }
  const mobiles = await Mobile.find({ brand: brand._id });

  res.status(200).json({ brand, mobiles });
});

// get brand mobiles
const getBrandMobiles = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const mobiles = await Mobile.find({ brand: id });
  if (!mobiles) {
    throw new Error(`No mobiles with id ${id}`);
  }
  res.status(200).json(mobiles);
});

// create brand
const createBrnad = asyncHandler(async (req, res) => {
  const { name, description, rank } = req.body;
  const logo = req.logo;

  if (!name) {
    res.status(400);
    throw new Error(`Please give name`);
  }

  slugify.extend({ "+": " plus " });
  const slug = slugify(name, { lower: true });

  const newBrand = await Brand.create({
    name,
    logo,
    description,
    rank,
    slug,
  });

  res.status(200).json(newBrand);
});

// update brand
const updateBrnad = asyncHandler(async (req, res) => {
  const { brandslug } = req.params;

  const brand = await Brand.findOneAndUpdate({ slug: brandslug }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!brand) {
    res.status(400);
    throw new Error(`No brand with id ${id}`);
  }

  res.status(200).json(brand);
});

// delete mobile
const deleteBrand = asyncHandler(async (req, res) => {
  const { brandslug } = req.params;
  const brand = await Brand.findOne({ slug: brandslug });

  if (!brand) {
    res.status(400);
    throw new Error(`No brand with name ${brandslug}`);
  }

  const filePath = path.join(__dirname, `../public/brands/${brand.logo}`);
  fs.unlink(filePath, (err) => console.log(err));

  await brand.remove();

  res.status(200).json({ name: brandslug });
});

module.exports = {
  getAllBrand,
  getSingleBrand,
  getBrandMobiles,
  createBrnad,
  updateBrnad,
  deleteBrand,
};
