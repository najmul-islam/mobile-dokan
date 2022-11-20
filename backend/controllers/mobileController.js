const asyncHandler = require("express-async-handler");
const Mobile = require("../models/mobileModel");

// get all Mobile
const getAllMobile = asyncHandler(async (req, res) => {
  const mobiles = await Mobile.find({});
  res.status(200).json(mobiles);
});

// get single mobile
const getSingleMobile = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const mobile = await Mobile.findOne({ _id: id });

  if (!mobile) {
    res.status(400);
    throw new Error(`No mobile with id ${id}`);
  }

  res.status(200).json(mobile);
});

// create Mobile
const createMobile = asyncHandler(async (req, res) => {
  const { name, brand, model } = req.body;
  console.log(req.body.name);
  if ((!name, !brand, !model)) {
    res.status(400);
    throw new Error("Please give name and model");
  }

  const newMobile = await Mobile.create(req.body);
  res.status(200).json(newMobile);
});

// update mobile
const updateMobile = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const mobile = await Mobile.findByIdAndUpdate({ _id: id }, req.body, {
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
  const mobile = await Mobile.findById(req.params.id);

  if (!mobile) {
    res.status(400);
    throw new Error(`No mobile with id ${req.params.id}`);
  }

  await mobile.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllMobile,
  getSingleMobile,
  createMobile,
  updateMobile,
  deleteMobile,
};
