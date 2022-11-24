const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");
const Brand = require("../models/brandModel");

// get all brands
const getAllBrand = asyncHandler(async (req, res) => {
  const brands = await Brand.find({});
  res.status(200).json(brands);
});

// get single brnad
const getSingleBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const brand = await Brand.findOne({ _id: id });

  if (!brand) {
    res.status(400);
    throw new Error(`No brand with id ${id}`);
  }

  res.status(200).json(brand);
});

// create brand
const createBrnad = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const logo = req.logo;

  if (!name) {
    res.status(400);
    throw new Error(`Please give name`);
  }

  const newBrand = await Brand.create({
    name,
    logo,
    description,
  });

  res.status(200).json(newBrand);
});

// update brand
const updateBrnad = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const brand = await Brand.findByIdAndUpdate({ _id: id }, req.body, {
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
  const brand = await Brand.findById(req.params.id);

  if (!brand) {
    res.status(400);
    throw new Error(`No brand with id ${req.params.id}`);
  }

  const filePath = path.join(__dirname, `../public/brands/${brand.logo}`);

  fs.unlink(filePath, (err) => console.log(err));

  await brand.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllBrand,
  getSingleBrand,
  createBrnad,
  updateBrnad,
  deleteBrand,
};
