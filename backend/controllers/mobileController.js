const asyncHandler = require("express-async-handler");
const Mobile = require("../models/mobileModel");

// get all Mobile
const getAllMobile = asyncHandler(async (req, res) => {
  const mobiles = await Mobile.find({});
  res.status(200).json(mobiles);
});

// get single mobile

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

module.exports = {
  getAllMobile,
  createMobile,
};
