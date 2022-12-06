const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");
const Mobile = require("../models/mobileModel");

// get all Mobile
const getAllMobile = asyncHandler(async (req, res) => {
  const mobiles = await Mobile.find({});
  res.status(200).json({ nbHits: mobiles.length, mobiles });
});

// get single mobile
const getSingleMobile = asyncHandler(async (req, res) => {
  const { mobileslug } = req.params;

  const mobile = await Mobile.findOne({ slug: mobileslug });

  if (!mobile) {
    res.status(400);
    throw new Error(`No mobile with id ${mobileslug}`);
  }

  res.status(200).json(mobile);
});

// create Mobile
const createMobile = asyncHandler(async (req, res) => {
  const { name, brand } = req.body;

  if ((!name, !brand)) {
    res.status(400);
    throw new Error("Please give name and model");
  }

  slugify.extend({ "+": " plus " });
  const slug = slugify(name, { lower: true });

  req.body.image = req.image;
  req.body.slug = slug;

  const mobile = await Mobile.create(req.body);

  res.status(200).json(mobile);
});

// update mobile
const updateMobile = asyncHandler(async (req, res) => {
  const { mobileslug } = req.params;
  const mobile = await Mobile.findOneAndUpdate({ slug: mobileslug }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!mobile) {
    res.status(400);
    throw new Error(`No mobile with id ${id}`);
  }

  res.status(200).json(mobile);
});

// delete mobile
const deleteMobile = asyncHandler(async (req, res) => {
  const { mobileslug } = req.params;
  const mobile = await Mobile.findOne({ slug: mobileslug });

  if (!mobile) {
    res.status(400);
    throw new Error(`No mobile with name ${req.params.id}`);
  }

  const filePath = path.join(__dirname, `../public/mobiles/${mobile.image}`);
  fs.unlink(filePath, (err) => console.log(err));
  await mobile.remove();

  res.status(200).json(mobile);
});

module.exports = {
  getAllMobile,
  getSingleMobile,
  createMobile,
  updateMobile,
  deleteMobile,
};
