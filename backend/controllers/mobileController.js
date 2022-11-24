const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");
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

  // console.log(mobileImg);

  // mobileImg.mv("../public/images/" + mobileImg.name, function (error) {
  //   if (error) {
  //     console.log("Couldn't upload the image file");
  //     console.log(error);
  //   } else {
  //     console.log("Image file succesfully uploaded.");
  //   }
  // });

  if ((!name, !brand, !model)) {
    res.status(400);
    throw new Error("Please give name and model");
  }

  const newMobile = await Mobile.create(req.body);
  const updatetMobile = await Mobile.findByIdAndUpdate(
    { _id: newMobile.id },
    { image: req.image },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json(updatetMobile);
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
  const filePath = path.join(__dirname, `../public/mobiles/${mobile.image}`);
  fs.unlink(filePath, (err) => console.log(err));
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
